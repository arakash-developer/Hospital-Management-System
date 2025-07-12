# Import Aliases Configuration

This project has been configured with import aliases to make imports cleaner and more maintainable.

## Configured Aliases

| Alias        | Path              | Description                                  |
| ------------ | ----------------- | -------------------------------------------- |
| `@`          | `./src`           | Base alias for any file in the src directory |
| `@assets`    | `./src/assets`    | For asset files (icons, images, SVGs)        |
| `@component` | `./src/component` | For React components                         |
| `@context`   | `./src/context`   | For React context providers                  |
| `@layout`    | `./src/layout`    | For layout components                        |
| `@router`    | `./src/router`    | For routing configuration                    |
| `@lib`       | `./src/lib`       | For utility libraries                        |
| `@util`      | `./src/util`      | For utility functions                        |
| `@public`    | `./public`        | For public assets                            |

## Usage Examples

### Before (Relative Imports)

```tsx
import Login from "../../component/login/Login";
import { UserProvider } from "../../context/User";
import MainLayout from "../layout/MainLayout";
import HomeIcon from "../../assets/HomeIcon";
```

### After (Import Aliases)

```tsx
import Login from "@component/login/Login";
import { UserProvider } from "@context/User";
import MainLayout from "@layout/MainLayout";
import HomeIcon from "@assets/HomeIcon";
```

### Using the Base Alias (@)

```tsx
// These are equivalent:
import { UserProvider } from "@context/User";
import { UserProvider } from "@/context/User";

// You can use @ for any file in src/
import SomeComponent from "@/component/SomeComponent";
import { someUtil } from "@/util/helpers";
```

### Public Assets

For files in the public directory, you can reference them directly in JSX:

```tsx
// Direct reference (recommended for public assets in JSX)
<img src="/logo.png" alt="Logo" />;

// Or using the alias in imports (for dynamic imports)
import logoPath from "@public/logo.png";
```

## Benefits

1. **Cleaner imports**: No more `../../../` relative paths
2. **Better maintainability**: Moving files doesn't break imports
3. **IDE support**: Better autocomplete and refactoring
4. **Consistency**: Standardized import patterns across the project

## Files Updated

The following configuration files have been updated:

- `vite.config.ts` - Vite bundler configuration
- `tsconfig.app.json` - TypeScript path mapping
- Various component files to demonstrate usage

## IDE Support

Most modern IDEs (VS Code, WebStorm, etc.) will automatically recognize these aliases and provide:

- Autocomplete suggestions
- Go to definition
- Refactoring support
- Import path suggestions

The aliases are now ready to use throughout your Hospital Management System project!
