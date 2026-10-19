# MERN Common Starter

A reusable building-block repository for MERN dashboards and CRUD applications. It uses a Create React App-compatible frontend, Bootstrap-only styling, an Express MVC API, Mongoose validation, MongoDB seed data, and separate components for common interface patterns.

## Included building blocks

### Backend

- Database connection module
- Generic Mongoose model
- REST controller and routes for list, detail, create, update, patch, and delete
- Search and dropdown query filters
- JSON 404 and error middleware
- Seed script and sample data
- Unit-tested query builder

### Frontend

- Application shell, fixed sidebar, and top bar
- Page header and action slot
- Metric cards, badges, progress bars, and entity cards
- Configurable filter bar and data table
- Shared pagination hook and component
- Generic modal and confirmation dialog
- Reusable loading, error, and empty states
- Controlled create/edit form
- Axios service layer, CRUD hook, and React context
- Example dashboard, CRUD list, and profile routes

## Start MongoDB

MongoDB must be available at `mongodb://127.0.0.1:27017`. Copy `backend/.env.example` to `backend/.env` if you want to change the database or API port.

## Run the backend

```bash
cd backend
npm install
npm run seed
npm start
```

The API runs at `http://localhost:5002`.

## Run the frontend

```bash
cd frontend
npm install
npm start
```

The frontend runs at `http://localhost:3000`. Copy `frontend/.env.example` to `frontend/.env` to override the API URL.

## Adapt it to a new project

1. Rename `Item` in the backend model, controller, and route modules.
2. Replace the schema fields and validation rules in `backend/models/Item.js`.
3. Rename `itemService`, `useItems`, and `ItemContext` in the frontend.
4. Update `ItemForm`, `ItemCard`, and the page column/filter configuration.
5. Change branding, colors, navigation, and user text in `frontend/src/config/theme.js` and the layout components.

Common components are intentionally domain-neutral, so they can be retained when the entity-specific modules are replaced.
