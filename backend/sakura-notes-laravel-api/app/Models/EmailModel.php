<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;
use JsonSerializable;
use function Sodium\add;

class EmailModel implements JsonSerializable
{
    public const LARAVEL_KEY_PREFIX = 'email:'; // For storage inside the Laravel-DB: email:{email}
    private string $email;

    public function __construct(string $email)
    {
        $this->email = $email;
    }
    public function jsonSerialize(): array
    {
        return [
            'email' => $this->getEmail(),
        ];
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public static function findAllNotes(string $email) : array {
        // get all note id's from the database for this particular email
        $noteIDs = Redis::smembers(self::LARAVEL_KEY_PREFIX.$email);

        // return an all notes for this email, or an empty array if there are none
        $notes = [];
        foreach($noteIDs as $noteID) {
            $note = NoteModel::find($noteID);
            $notes[] = $note; // This is equivalent to: array_push($notes, $note);
        }
        return $notes;
    }
}
