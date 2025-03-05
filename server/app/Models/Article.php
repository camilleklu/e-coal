<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public static function updateLeadStories()
    {
        $latestArticles = self::orderBy('date', 'desc')->take(3)->get();

        self::query()->update(['leadStory' => false]);

        self::whereIn('id', $latestArticles->pluck('id'))->update(['leadStory' => true]);
    }
}
