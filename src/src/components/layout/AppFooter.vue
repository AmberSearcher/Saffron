<template>
  <footer class="bg-background-100 mt-auto">
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">About AmberSearch</h3>
          <p class="text-text-600">
            A powerful search engine designed to help you find what you're looking for.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-text-600 hover:text-primary-600">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="text-text-600 hover:text-primary-600">Terms of Service</a>
            </li>
            <li>
              <a href="#" class="text-text-600 hover:text-primary-600">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Follow Us</h3>
          <div class="flex gap-4">
            <a href="#" class="text-text-600 hover:text-primary-600">
              <!-- Social media icons here -->
            </a>
          </div>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-text-200 text-center text-text-500">
        <p>&copy; {{ new Date().getFullYear() }} AmberSearch. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
