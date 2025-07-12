import React from "react";

/**
 * Import Alias Examples - This file demonstrates how to use the configured import aliases
 *
 * Available aliases:
 * @         - Base alias for src/ directory (e.g., @/context/User)
 * @component - For components directory (e.g., @component/login/Login)
 * @assets   - For assets directory (e.g., @assets/HomeIcon)
 * @context  - For context directory (e.g., @context/User)
 * @layout   - For layout directory (e.g., @layout/MainLayout)
 * @router   - For router directory (e.g., @router/Router)
 * @lib      - For lib directory (e.g., @lib/utils)
 * @util     - For util directory (e.g., @util/helpers)
 * @public   - For public directory (e.g., @public/logo.png)
 *
 * Examples of usage:
 *
 * // Instead of relative imports:
 * import Login from "../../component/login/Login";
 * import { UserProvider } from "../../context/User";
 *
 * // Use aliases:
 * import Login from "@component/login/Login";
 * import { UserProvider } from "@context/User";
 *
 * // For public assets in JSX:
 * <img src="/logo.png" alt="Logo" />  // Direct reference to public folder
 */

const ImportAliasExample: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Import Alias Configuration</h2>
      <div className="space-y-2">
        <p>
          <strong>@</strong> - Base alias for src/ directory
        </p>
        <p>
          <strong>@component</strong> - For components directory
        </p>
        <p>
          <strong>@assets</strong> - For assets directory
        </p>
        <p>
          <strong>@context</strong> - For context directory
        </p>
        <p>
          <strong>@layout</strong> - For layout directory
        </p>
        <p>
          <strong>@router</strong> - For router directory
        </p>
        <p>
          <strong>@lib</strong> - For lib directory
        </p>
        <p>
          <strong>@util</strong> - For util directory
        </p>
        <p>
          <strong>@public</strong> - For public directory
        </p>
      </div>
    </div>
  );
};

export default ImportAliasExample;
