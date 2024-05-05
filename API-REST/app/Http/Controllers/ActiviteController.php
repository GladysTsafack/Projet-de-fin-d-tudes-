<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activite;

class ActiviteController extends Controller
{
  
    protected $activite;
    public function __construct()
    {
        $this->activite=new Activite();    
    }



    public function index()
    {
        return $this->activite->all();
    }

    public function store(Request $request)
    {
       
        return $this->activite->create($request->all());
    }

   
    public function show(string $id)
    {
        return $activite=$this->activite->find($id);
    }

   
    public function update(Request $request, string $id)
    {
       $activite=$this->activite->find($id);
       $activite->update($request->all());
       return $activite;

    }


    public function destroy(string $id)
    {
        $activite=$this->activite->find($id);
        return $activite->delete();
        
    }

    public function getActivitiesByCategory(Request $request, $category)
{
    $activities = Activite::where('categorie_id', $category)->get();

    if ($activities->isEmpty()) {
        return response()->json(['message' => 'No activities found for the specified category'], 404);
    }

    
    return response()->json($activities);
}

}
