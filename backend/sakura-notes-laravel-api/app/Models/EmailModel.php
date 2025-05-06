<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmailModel extends Model
{
    public const LARAVEL_KEY_PREFIX = 'email:'; // For storage inside the Laravel-DB: email:{email}
}
