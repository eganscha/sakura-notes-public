<?php

namespace App\Http\Controllers;

use App\Models\NoteModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use InvalidArgumentException;
use JsonException;

class NoteController extends Controller
{
    /**
     * shows a single note based on its id.
     *
     * @param string $id The id of the note inside the Redis database (without its prefix)
     * @return JsonResponse A JSON representation of the note, or an error
     */
    public function show(string $id) : JsonResponse
    {
        $note = null;
        try {
            $note = NoteModel::find($id);
        } catch (InvalidArgumentException | JsonException $e) {
            Log::error("Exception inside of NoteController show() during NoteModel::find(). Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Note not found',
            ], 404);
        }

        return response()->json([
            'note' => [
                'id'      => $note->getId(),
                'email'   => $note->getEmail(),
                'content' => $note->getContent(),
                'tags'    => $note->getTags(),
            ]
        ], 200);
    }

    /**
     * creates and persists a single note into the corresponding stores (note, email, [tag 1], [tag 2], ..., [tag n])
     *
     * @param Request $request Expects a JSON-encoded HTTP request body with the following structure:
     *  {
     *    "email":   string,    // Required. A valid email address.
     *    "content": string,    // Required. The textual body of the note.
     *    "tags":    string[]   // Optional. An array of tag strings (e.g., ["personal", "urgent"]).
     *  }
     * @return JsonResponse A JSON representation of the created note, or an error
     */
    public function store(Request $request) : JsonResponse
    {
        // Laravel will automatically parse the JSON and populate $request->input(...).
        $validatedRequest = null;
        try {
            $validatedRequest = $request->validate([
                'email' => 'required|email',
                'content' => 'required|string',
                'tags' => 'array',
                'tags.*' => 'string',
            ]);
        } catch (ValidationException $e) {
            Log::error("Exception inside of NoteController store() during validation. Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Invalid json_request.',
            ], 422);
        }

        $note = null;
        $email = $validatedRequest['email'];
        $content = $validatedRequest['content'];
        $tags = $validatedRequest['tags'] ?? []; // Optional, Equivalent to isset(tags) ? $tags : [];
        try {
            $note = NoteModel::createAndStore($email, $content, $tags);
        } catch (InvalidArgumentException | JsonException $e) {
            Log::error("Exception inside of NoteController store() during NoteModel::createAndStore(). Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Unable to process the request.',
            ], 500);
        }

        return response()->json([
            'note' => [
                'id'      => $note->getId(),
                'email'   => $note->getEmail(),
                'content' => $note->getContent(),
                'tags'    => $note->getTags(),
            ]
        ], 200);
    }
}
