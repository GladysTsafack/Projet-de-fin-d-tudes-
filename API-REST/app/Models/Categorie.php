<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{

    protected $table='categories';
    protected $primaryKey='id';
    protected $fillable=[
        'description',
    ];
    use HasFactory;
}
 