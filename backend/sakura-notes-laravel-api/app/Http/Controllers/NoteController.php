<?php

namespace App\Http\Controllers;

use App\Models\NoteModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class NoteController extends Controller
{
    /**
     * Shows a single note based on its id.
     *
     * @param string $id The id of the note inside the Redis database (without its prefix)
     * @return JsonResponse A structured JSON response: { status: HTTP response status code, data: note-object OR errorMessage }
     */
    public function show(string $id) : JsonResponse
    {
        $note = NoteModel::find($id);

        // No valid node with such an id, return 404 and errorMessage
        if($note === null) {
            return response()->json([
                'status' => 404,
                'data' => [
                    'errorMessage' => 'Note not found',
                ],
            ], 404);
        }

        // Found valid note, return 200 and note
        return response()->json([
            'status' => 200,
            'data'   => [
                'note' => [
                    'id'      => $note->getId(),
                    'email'   => $note->getEmail(),
                    'content' => $note->getContent(),
                    'tags'    => $note->getTags(),
                    ]
                ]
            ], 200);
    }
}
