<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;

class CategorieController extends Controller
{
    

    protected $categorie;
    public function __construct()
    {
        $this->categorie=new Categorie();    
    }

    public function index()
    {
        return $this->categorie->all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        return $this->categorie->create($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
       return $categorie=$this->categorie->find($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $categorie=$this->categorie->find($id);
        $categorie->update($request->all());
        return $categorie;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $categorie=$this->categorie->find($id);
        return $categorie->delete();
    }
}
