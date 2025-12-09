<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Producten
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            <div class="mb-6 flex justify-end">
                <a href="{{ route('products.create') }}" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-150 ease-in-out shadow-md">
                    Nieuw Product
                </a>
            </div>

            <div class="bg-white shadow-xl sm:rounded-lg p-6">

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    @forelse($products as $product)
                        <div class="bg-gray-50 border border-gray-200 rounded-lg shadow-md p-5 flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg">
                            <div>
                            @if($product->image)
                          <img src="{{ asset('storage/'.$product->image) }}"
                            alt="{{ $product->name }}"
                            class="w-full aspect-square object-contain rounded bg-white p-2 mb-3">
                            @endif




                                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ $product->name }}</h3>
                                <hr class="my-3">

                                <p class="text-2xl font-semibold text-green-600 mb-3">
                                    € {{ number_format($product->base_price, 2, ',', '.') }}
                                </p>

                                <div class="mb-4">
                                    @if ($product->is_active)
                                        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                            Actief
                                        </span>
                                    @else
                                        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                            Inactief
                                        </span>
                                    @endif
                                </div>
                            </div>
                            
                            <div class="flex gap-3 mt-4 pt-3 border-t border-gray-100">
                                <a href="{{ route('products.edit', $product) }}"
                                   class="flex-1 text-center px-3 py-2 bg-yellow-500 text-white text-sm rounded-md hover:bg-yellow-600 transition duration-150 ease-in-out">
                                    Bewerk
                                </a>

                                <form action="{{ route('products.destroy', $product) }}" method="POST" class="flex-1">
                                    @csrf
                                    @method('DELETE')

                                    <button class="w-full px-3 py-2 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition duration-150 ease-in-out"
                                            onclick="return confirm('Weet u zeker dat u product {{ $product->name }} wilt verwijderen?')">
                                        Verwijder
                                    </button>
                                </form>
                            </div>
                        </div>
                    @empty
                        <div class="lg:col-span-3 text-center py-10 text-gray-500">
                            <p class="text-lg">Geen producten gevonden.</p>
                            <p>Klik op 'Nieuw Product' om er een toe te voegen.</p>
                        </div>
                    @endforelse

                </div>

                <!-- Responsive Pagination -->
                <div class="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <!-- Products Info -->
                    <div class="text-sm text-gray-600">
                        Getoond: <span class="font-semibold">{{ ($products->currentPage() - 1) * $products->perPage() + 1 }}</span> - 
                        <span class="font-semibold">{{ min($products->currentPage() * $products->perPage(), $products->total()) }}</span> 
                        van <span class="font-semibold">{{ $products->total() }}</span> producten
                    </div>

                    <!-- Pagination Links -->
                    <div class="flex flex-wrap justify-center gap-1 sm:gap-2">
                        {{-- Previous Page Link --}}
                        @if ($products->onFirstPage())
                            <span class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-400 bg-gray-100 rounded-md">← Vorige</span>
                        @else
                            <a href="{{ $products->previousPageUrl() }}" class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150">← Vorige</a>
                        @endif

                        {{-- Pagination Elements --}}
                        @foreach ($products->getUrlRange(1, $products->lastPage()) as $page => $url)
                            @if ($page == $products->currentPage())
                                <span class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-white bg-blue-600 rounded-md font-semibold">{{ $page }}</span>
                            @else
                                <a href="{{ $url }}" class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition duration-150">{{ $page }}</a>
                            @endif
                        @endforeach

                        {{-- Next Page Link --}}
                        @if ($products->hasMorePages())
                            <a href="{{ $products->nextPageUrl() }}" class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150">Volgende →</a>
                        @else
                            <span class="px-2 sm:px-3 py-2 text-xs sm:text-sm text-gray-400 bg-gray-100 rounded-md">Volgende →</span>
                        @endif
                    </div>

                    <!-- Jump to Page (Mobile friendly) -->
                    <form action="{{ route('dashboard') }}" method="GET" class="flex gap-2">
                        <input type="number" name="page" min="1" max="{{ $products->lastPage() }}" placeholder="Ga naar..." class="w-16 sm:w-20 px-2 py-2 text-xs sm:text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <button type="submit" class="px-3 py-2 text-xs sm:text-sm text-white bg-green-600 rounded-md hover:bg-green-700 transition duration-150">Ga</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>