# Generic App Sidebar

A reusable sidebar component that can be configured for different types of content (projects, documents, teams, etc.).

## Location
`/components/app/sidebar.tsx`

## Usage

### 1. Basic Usage with Pre-configured Sidebars

```tsx
import { ProjectSidebar } from "@/components/app/sidebar"

// Use the pre-configured project sidebar
<ProjectSidebar user={user} />
```

### 2. Custom Sidebar Configuration

```tsx
import { AppSidebar, SidebarConfig } from "@/components/app/sidebar"

const customConfig: SidebarConfig = {
  title: "My Items",
  titleHref: "/items", // optional - makes title clickable
  newItemText: "Create New Item",
  newItemHref: "/items/new",
  emptyStateText: "No items yet",
  apiEndpoint: "/api/items"
}

<AppSidebar user={user} config={customConfig} />
```

### 3. Advanced Usage with Custom Transformations

```tsx
import { AppSidebar, SidebarConfig, SidebarItem } from "@/components/app/sidebar"

const customConfig: SidebarConfig = {
  title: "Documents",
  newItemText: "Create Document",
  newItemHref: "/docs/new",
  emptyStateText: "No documents yet",
  apiEndpoint: "/api/documents"
}

// Custom data transformation
const transformData = (data: any[]): SidebarItem[] => {
  return data.map(doc => ({
    id: doc.id,
    title: `📄 ${doc.title}`,
    href: `/docs/${doc.id}`
  }))
}

// Custom active item logic
const isActiveItem = (item: SidebarItem, pathname: string): boolean => {
  return pathname.startsWith(`/docs/${item.id}`)
}

<AppSidebar
  user={user}
  config={customConfig}
  transformApiData={transformData}
  isActiveItem={isActiveItem}
/>
```

## Types

### SidebarConfig
```tsx
type SidebarConfig = {
  title: string          // Header title
  titleHref?: string     // Optional link for title
  newItemText: string    // Text for "create new" button
  newItemHref: string    // Link for "create new" button
  emptyStateText: string // Text shown when no items
  apiEndpoint: string    // API endpoint to fetch items
}
```

### SidebarItem
```tsx
type SidebarItem = {
  id: number | string
  title: string
  href: string
}
```

### AppSidebarProps
```tsx
type AppSidebarProps = {
  user: User | undefined
  config: SidebarConfig
  isActiveItem?: (item: SidebarItem, pathname: string) => boolean
  transformApiData?: (data: any[]) => SidebarItem[]
}
```

## Pre-configured Sidebars

### ProjectSidebar
- Configured for hackathon projects
- Fetches from `/api/projects`
- Shows project names
- Links to `/project/{id}`

### DocumentsSidebar (Example)
- Configured for documents
- Fetches from `/api/documents`
- Shows document titles
- Links to `/documents/{id}`

### TeamsSidebar (Example)
- Configured for teams
- Fetches from `/api/teams`
- Shows team names
- Links to `/teams/{id}`

## API Requirements

Your API endpoint should return data in this format:
```json
{
  "data": [
    {
      "id": 1,
      "title": "Item Name", // or "name", "hackathonName", etc.
      // ... other properties
    }
  ]
}
```

The `transformApiData` function can handle different API response formats.

## Features

- 🔄 **Reusable**: One component for all sidebar use cases
- 📱 **Mobile-friendly**: Automatically closes mobile sidebar on link clicks
- 🎨 **Customizable**: Override data transformation and active item logic
- ⚡ **Loading states**: Built-in loading, error, and empty states
- 🎯 **Type-safe**: Full TypeScript support
- 🧩 **Composable**: Easy to create new configurations

## Migration from Project-specific Sidebar

Replace:
```tsx
import { AppSidebar } from "@/components/project/sidebar"
<AppSidebar user={user} />
```

With:
```tsx
import { ProjectSidebar } from "@/components/app/sidebar"
<ProjectSidebar user={user} />
```
