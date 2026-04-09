# 🟢 Dopartis — Setup Local

## Estructura
```
dopartis-v2/
├── server.js          ← Backend Node.js + Express
├── .env               ← API Key (NO subir a GitHub)
├── .gitignore
├── package.json
└── public/
    └── index.html     ← Frontend
```

## Cómo correr

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Correr el servidor
node server.js

# 3. Abrir en el browser
http://localhost:3000
```

## Endpoints del backend

| Ruta                            | Descripción                        |
|---------------------------------|------------------------------------|
| GET /api/live                   | Partidos en vivo ahora             |
| GET /api/matches/by-date        | Partidos por fecha (?date=YYYYMMDD)|
| GET /api/matches/by-date-league | Partidos por fecha y liga          |
| GET /api/matches/by-league      | Todos los partidos de una liga     |
| GET /api/standings              | Tabla de posiciones (?leagueid=XX) |
| GET /api/standings/home         | Tabla local                        |
| GET /api/standings/away         | Tabla visitante                    |
| GET /api/top-scorers            | Goleadores (?leagueid=XX)          |
| GET /api/top-assists            | Asistidores                        |
| GET /api/match/detail           | Detalle de partido (?eventid=XX)   |
| GET /api/match/score            | Score de partido                   |
| GET /api/match/stats            | Estadísticas de partido            |
| GET /api/match/lineup/home      | Alineación local                   |
| GET /api/match/lineup/away      | Alineación visitante               |
| GET /api/match/h2h              | Head to head                       |
| GET /api/match/highlights       | Highlights                         |
| GET /api/leagues                | Lista de ligas                     |
| GET /api/teams                  | Equipos de una liga                |
| GET /api/search                 | Búsqueda (?q=termino)              |
| GET /api/health                 | Estado del servidor                |

## IDs de ligas (a confirmar con /api/leagues)
| Liga              | ID (tentativo) |
|-------------------|---------------|
| Liga Argentina    | 244           |
| Brasileirão       | 86            |
| Premier League    | 42            |
| LaLiga            | 8             |
| Serie A           | 23            |
| Bundesliga        | 54            |
| Champions League  | 7             |
| Copa Libertadores | 12            |

> ⚠️ Los IDs pueden diferir. Verificar corriendo: http://localhost:3000/api/leagues

## Próximos pasos
- [ ] Modal de detalle de partido (stats, lineups, H2H)
- [ ] Confirmar IDs de ligas con la API real
- [ ] Agregar Google AdSense
- [ ] Deploy en VPS / Railway / Render