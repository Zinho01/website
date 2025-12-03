<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Nieuw Product
        </h2>
    </x-slot>

    <div class="py-6 max-w-4xl mx-auto">
        <form action="{{ route('products.store') }}" method="POST" enctype="multipart/form-data"
              class="bg-white p-6 shadow rounded">
            @csrf

            <div class="mb-4">
                <label class="block">Naam</label>
                <input type="text" name="name" value="{{ old('name') }}" class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">Slug (optioneel)</label>
                <input type="text" name="slug" value="{{ old('slug') }}" class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">Beschrijving</label>
                <textarea name="description" class="w-full border rounded p-2" rows="4">{{ old('description') }}</textarea>
            </div>

            <div class="mb-4">
                <label class="block">Prijs (€)</label>
                <input type="number" step="0.01" name="base_price" value="{{ old('base_price') }}" class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">SKU</label>
                <input type="text" name="sku" value="{{ old('sku') }}" class="w-full border rounded p-2">
            </div>

            <div class="mb-4">
                <label class="block">Categorie</label>
                <select name="category_id" class="w-full border p-2 rounded">
                    <option value="">-- Selecteer --</option>
                    @foreach($categories as $category)
                        <option value="{{ $category->id }}" {{ old('category_id') == $category->id ? 'selected' : '' }}>
                            {{ $category->name }}
                        </option>
                    @endforeach
                </select>
            </div>

            <div class="mb-4">
                <label class="block">Actief?</label>
                <input type="checkbox" name="is_active" value="1" {{ old('is_active') ? 'checked' : '' }}>
            </div>

            <div class="mb-4">
                <label class="block">Afbeelding (optioneel)</label>
                <input type="file" name="image" class="w-full border p-2 rounded">
            </div>

            <div class="flex gap-2">
                <button class="bg-blue-600 text-white px-4 py-2 rounded">Opslaan</button>
                <a href="{{ route('dashboard') }}" class="px-4 py-2 border rounded">Annuleren</a>
            </div>
        </form>
    </div>
</x-app-layout>
