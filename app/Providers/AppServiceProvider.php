<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Register routes manually in AppServiceProvider.
        $this->mapApiRoutes();
        $this->mapWebRoutes();
    }

    /**
     * Define the "api" routes for the application.
     *
     * @return void
     */
    protected function mapApiRoutes(): void
    {
        Route::prefix('api') // Define the 'api' prefix for API routes
             ->middleware('api') // Use the 'api' middleware group
             ->namespace('App\\Http\\Controllers') // Ensure the correct namespace for controllers
             ->group(base_path('routes/api.php')); // Define the route file
    }

    /**
     * Define the "web" routes for the application.
     *
     * @return void
     */
    protected function mapWebRoutes(): void
    {
        Route::middleware('web') // Use the 'web' middleware group
             ->namespace('App\\Http\\Controllers') // Ensure the correct namespace for controllers
             ->group(base_path('routes/web.php')); // Define the route file
    }
}


