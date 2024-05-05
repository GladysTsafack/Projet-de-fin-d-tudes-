<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activite extends Model
{
    protected $table='activites';
    protected $primaryKey='id';
    protected $fillable=[
        'nom',
        'Date',
        'heure_debut',
        'heure_fin',
        'localisation',
        'categorie_id',
        'user_id',
    ];

    public function categorie(){
        return $this->belongsTo(Categorie::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }
    use HasFactory;
}
