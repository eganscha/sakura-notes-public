<?php

namespace App\Http\Controllers;

use App\Models\EmailModel;
use App\Models\TagModel;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\ValidationException;
use JsonException;

class TagController extends Controller
{
    public function index(Request $request) : JsonResponse {
        $validatedRequest = null;
        try {
            $validatedRequest = $request->validate([
                'tag' => 'required|string',
            ]);
        } catch (ValidationException $e) {
            Log::error("Exception inside of TagController index() during validation. Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Invalid json_request.',
            ], 422);
        }

        $notes = null;
        try {
            $notes = TagModel::findAllNotes($validatedRequest['tag']);
        } catch (JsonException $e) {
            Log::error("Exception inside of TagModel index() during TagModel::findAllNotes(). Exception:\n".$e->getMessage());
            return response()->json([
                'error' => 'Internal server error.',
            ], 500);
        }

        return response()->json([
            'notes' => $notes,
        ], 200);
    }
}
