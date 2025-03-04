<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;

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
    // I just didn't do the work for the tags I'll come back for this later
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
    // Same I did't do the work for the tags but I'll come back later on this
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
        $article->save();

        return response()->json($article, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
    }

    // function getArticlewithTags to get the tags associated to the specified article
    function getArticlewithTags(Article $article)
    {
        return $article->tags;
    }
}
