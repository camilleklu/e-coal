<?php

namespace App\Http\Controllers\API;

use App\Models\Tag;
use App\Models\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::all();
        return $articles;
    }

    /**
     * Store a newly created resource in storage.
     */
    // I just need to do the file thing for thumbnail and media to replace the URL
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'thumbnailURL' => 'required|string',
            'mediaType' => 'nullable|string',
            'mediaURL' => 'nullable|string',
            'leadStory' => 'required|boolean',
            'author' => 'required|string|max:255',
            'date' => 'required|date',
            'extract' => 'required|string',
            'tags' => 'array',
            'tags.*' => 'string'
        ]);

        $newArticle = Article::create([
            'title' => $request->input("title"),
            'content' => $request->input("content"),
            'thumbnailURL' => $request->input("thumbnailURL"),
            'mediaType' => $request->input("mediaType"),
            'mediaURL' => $request->input("mediaURL"),
            'leadStory' => $request->input("leadStory"),
            'author' => $request->input("author"),
            'date' => $request->input("date"),
            'extract' => $request->input("extract")
        ]);

        if (!empty($request->input('tags'))) {
            $tagIds = [];
            foreach ($request->input('tags') as $tagTitle) {
                $tag = Tag::firstOrCreate(['name' => $tagTitle]);
                $tagIds[] = $tag->id;
            }
            $newArticle->tags()->attach($tagIds);
        }
        return response()->json($newArticle, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        // $article->load('tags');
        return $article;
    }

    /**
     * Update the specified resource in storage.
     */
    // I just need to do the file thing for thumbnail and media to replace the URL    
    public function update(Request $request, Article $article)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'thumbnailURL' => 'required|string',
            'mediaType' => 'nullable|string',
            'mediaURL' => 'nullable|string',
            'leadStory' => 'required|boolean',
            'author' => 'required|string|max:255',
            'date' => 'required|date',
            'extract' => 'required|string',
            'tags' => 'array',
            'tags.*' => 'string'
        ]);

        $article->update([
            'title' => $request->input("title"),
            'content' => $request->input("content"),
            'thumbnailURL' => $request->input("thumbnailURL"),
            'mediaType' => $request->input("mediaType"),
            'mediaURL' => $request->input("mediaURL"),
            'leadStory' => $request->input("leadStory"),
            'author' => $request->input("author"),
            'date' => $request->input("date"),
            'extract' => $request->input("extract")
        ]);

        if (!empty($request->input('tags'))) {
            $tagIds = [];
            foreach ($request->input('tags') as $tagTitle) {
                $tag = Tag::firstOrCreate(['name' => $tagTitle]);
                $tagIds[] = $tag->id;
            }
            $article->tags()->sync($tagIds);
        }

        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    // This is working but if I can I still need to figure out how can I change the id to don't have hole in the ids
    public function destroy(Article $article)
    {
        $article->tags()->detach();
        $article->delete();
        return response()->json(['message' => 'Article deleted with succes'], 200);

    }

    // function getArticlewithTags to get the tags associated to the specified article
    public function getArticlewithTags(Article $article)
    {
        return $article->tags;
    }

    public function search(Request $request)
    {
        $query = $request->input('q');
        $articles = Article::where('title', 'LIKE', value: "%{$query}%")->get();
        return response()->json($articles);
    }
}
