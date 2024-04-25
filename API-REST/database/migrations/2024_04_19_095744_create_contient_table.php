<?php

use App\Models\Activite;
use App\Models\Planning;
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
        Schema::create('contients', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->foreignIdFor(Activite::class);
            $table->foreignIdFor(Planning::class);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contient');
    }
};
