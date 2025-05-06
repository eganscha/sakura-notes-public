<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TagModel extends Model
{
    public const LARAVEL_KEY_PREFIX = 'tag:'; // For storage inside the Laravel-DB: tag:{tag}
}
