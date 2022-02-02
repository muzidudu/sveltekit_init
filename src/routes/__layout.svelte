<script>
    import "virtual:windi.css"
  
    // 如果你想要启用 windi devtools
    import { browser } from "$app/env";
    if (browser) import("virtual:windi-devtools")
  </script>

  <main>
      <slot />
  </main>