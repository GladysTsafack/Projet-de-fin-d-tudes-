<?php

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
        Schema::create('familles', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->integer('nombre_membre');
            $table->timestamps();
            $table->foreignIdFor(User::class);

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('famille');
    }
};
