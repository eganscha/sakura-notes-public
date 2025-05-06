<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;
use JsonSerializable;

class TagModel implements JsonSerializable
{
    public const LARAVEL_KEY_PREFIX = 'tag:'; // For storage inside the Laravel-DB: tag:{tag}
    private string $tag;

    public function __construct(string $tag)
    {
        $this->tag = $tag;
    }

    public function jsonSerialize(): array
    {
        return [
            'tag' => $this->getTag(),
        ];
    }

    public function getTag(): string
    {
        return $this->tag;
    }

    public static function findAllNotes(string $tag) : array {
        // get all note id's from the database for this particular $tag
        $noteIDs = Redis::smembers(self::LARAVEL_KEY_PREFIX.$tag);

        // return an all notes for this tag, or an empty array if there are none
        $notes = [];
        foreach($noteIDs as $noteID) {
            $note = NoteModel::find($noteID);
            $notes[] = $note; // This is equivalent to: array_push($notes, $note);
        }
        return $notes;
    }
}
