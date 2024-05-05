<?php

use App\Models\Categorie;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('activites', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->date('Date');
            $table->time('heure_debut');
            $table->time('heure_fin');
            $table->text('localisation');
            $table->timestamps();
            $table->foreignIdFor(Categorie::class);
            $table->foreignIdFor(User::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('activite');
    }
};
