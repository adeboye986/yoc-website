<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\TagController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\BlogController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/about', function () {
    return view('about');
});

Route::get('/services', function () {
    return view('services');
});

Route::get('/contact', function () {
    return view('contact');
});

Route::get('/faq', function () {
    return view('faq');
});

Route::get('/team', function () {
    return view('team');
});

Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blog.post');

Route::prefix('admin')->group(function () {
    Route::resource('posts', PostController::class);
});

Route::prefix('admin')
     ->name('admin.')
     ->group(function () {
         
    Route::resource('categories', CategoryController::class);
    Route::resource('tags',       TagController::class);
    Route::resource('posts',      PostController::class);

    Route::get('posts/published', [PostController::class,'showPublishedPosts'])
         ->name('posts.published');
    Route::get('posts/draft',     [PostController::class,'showDraftsPosts'])
         ->name('posts.draft');
    Route::get('posts/pending',   [PostController::class,'showPendingPosts'])
         ->name('posts.pending');

        //  Route::get('author',      [AuthorController::class,'index'])->name('author.index');
        //  Route::get('author/create',[AuthorController::class,'create'])->name('author.create');
        //  Route::post('author',     [AuthorController::class,'store'])->name('author.store');
});

 Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('author', [\App\Http\Controllers\Admin\AuthorController::class, 'index'])->name('author.index');
        Route::get('author/create', [\App\Http\Controllers\Admin\AuthorController::class, 'create'])->name('author.create');
        Route::post('author', [\App\Http\Controllers\Admin\AuthorController::class, 'store'])->name('author.store');
    });


// Route::prefix('admin')->group(function () {
//     Route::resource('categories', CategoryController::class);
//     Route::resource('tags', TagController::class);
//     Route::resource('posts', PostController::class);
// });

    // In web.php (routes file)
    // Route::get('/admin/posts/published', [PostController::class, 'showPublishedPosts'])->name('admin.posts.published');
    // Route::get('/admin/posts/draft', [PostController::class, 'showDraftsPosts'])->name('admin.posts.draft');
    // Route::get('/admin/posts/pending', [PostController::class, 'showPendingPosts'])->name('admin.posts.pending');

    // Route::prefix('admin')->name('admin.')->group(function () {
    //     Route::get('author', [\App\Http\Controllers\Admin\AuthorController::class, 'index'])->name('author.index');
    //     Route::get('author/create', [\App\Http\Controllers\Admin\AuthorController::class, 'create'])->name('author.create');
    //     Route::post('author', [\App\Http\Controllers\Admin\AuthorController::class, 'store'])->name('author.store');
    // });
    

