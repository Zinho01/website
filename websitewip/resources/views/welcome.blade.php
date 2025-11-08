<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="utf-8">
    <title>Beauty Kliniek Medewerkers</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/css/app.css')
</head>
<body class="antialiased bg-[#F4E1D1] dark:bg-[#171717] text-[#171717] dark:text-[#F4F4F5]">

<div class="min-h-screen flex flex-col items-center justify-center px-6 py-12">
    <div class="mb-8">
        <picture>
            <source srcset="{{ asset('images/logo-clinic-dark.jpg') }}" media="(prefers-color-scheme: dark)">
            <img class="h-24 w-auto antialiased rounded-lg shadow-md" src="{{ asset('images/logo-clinic.jpeg') }}" alt="Beauty Kliniek Logo">
        </picture>
    </div>

    <div class="bg-[#FFFFFF] dark:bg-[#1a1a1a] p-8 rounded-3xl shadow-xl max-w-lg w-full text-center">
        <h1 class="text-5xl sm:text-6xl font-extrabold mb-4 text-[#000000] dark:text-[#F4F4F5]">
            Welkom, Medewerker
        </h1>

        <p class="text-lg sm:text-xl mb-8 text-[#6B7280] dark:text-[#E4E4E7]">
            Log in om toegang te krijgen tot het medewerkersdashboard of registreer een nieuw account als dit je eerste keer is.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="{{ route('register') }}" class="px-6 py-3 bg-[#171717] dark:bg-[#000000] text-[#F4F4F5] dark:text-[#F4F4F5] font-semibold rounded-2xl hover:bg-[#000000] dark:hover:bg-[#1a1a1a] transition">
                Registreren
            </a>
            <a href="{{ route('login') }}" class="px-6 py-3 bg-[#E5E7EB] dark:bg-[#2c2c2c] text-[#171717] dark:text-[#F4F4F5] font-semibold rounded-2xl hover:bg-[#E4E4E7] dark:hover:bg-[#3d3d3d] transition">
                Inloggen
            </a>
        </div>
    </div>
</div>
</body>
</html>
