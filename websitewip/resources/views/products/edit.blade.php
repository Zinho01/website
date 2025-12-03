<x-app-layout>

    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Product bewerken
        </h2>
    </x-slot>

    <div class="py-6 max-w-4xl mx-auto">

        <form action="{{ route('products.update', $product) }}" method="POST" enctype="multipart/form-data"
              class="bg-white p-6 shadow rounded">
            @csrf
            @method('PUT')

            <div class="mb-4">
                <label class="block">Naam</label>
                <input type="text" name="name" value="{{ old('name', $product->name) }}"
                       class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">Slug</label>
                <input type="text" name="slug" value="{{ old('slug', $product->slug) }}"
                       class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">Beschrijving</label>
                <textarea name="description" class="w-full border rounded p-2" rows="4">{{ old('description', $product->description) }}</textarea>
            </div>

            <div class="mb-4">
                <label class="block">Prijs (€)</label>
                <input type="number" step="0.01" name="base_price" value="{{ old('base_price', $product->base_price) }}"
                       class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">SKU (keeping stock unit for inventory management)</label>
                <input type="text" name="sku" value="{{ old('sku', $product->sku) }}"
                       class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">Categorie</label>
                <select name="category_id" class="w-full border p-2 rounded">
                    <option value="">-- Selecteer --</option>
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}"
                            {{ $product->category_id == $category->id ? 'selected' : '' }}>
                            {{ $category->name }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div class="mb-4">
                <label class="block">Actief?</label>
                <input type="checkbox" name="is_active" value="1"
                    {{ $product->is_active ? 'checked' : '' }}>
            </div>

            <div class="mb-4">
                <label class="block">Afbeelding (optioneel)</label>
                <input type="file" name="image" class="w-full border p-2 rounded">
                @if($product->image)
                    <img src="{{ asset('storage/'.$product->image) }}" class="w-32 mt-2 rounded shadow">
                @endif
            </div>
            <label class="block mb-4">
             <input type="checkbox" name="remove_image" value="1">
                    Verwijder huidige afbeelding
            </label>

            <div class="flex gap-2">
                <button class="bg-blue-600 text-white px-4 py-2 rounded">Opslaan</button>
                <a href="{{ route('products.index') }}" class="px-4 py-2 border rounded">Annuleren</a>
            </div>
            
        </form>

    </div>
</x-app-layout>
