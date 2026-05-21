// ═══════════════════════════════════════════════════════════════════
// CAMPEONES — datos manuales
// Para actualizar: agregar { year, season, name, logo } al array
// Logos: https://media.api-sports.io/football/teams/{id}.png
// ═══════════════════════════════════════════════════════════════════

const CHAMP_DATA = {
  arg_liga: { label: "Liga Argentina", items: [
    { year:2024, season:"Clausura 2024", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2024, season:"Apertura 2024", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2023, season:"Clausura 2023", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:2023, season:"Apertura 2023", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2022, season:"Clausura 2022", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2022, season:"Apertura 2022", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2021, season:"Clausura 2021", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2021, season:"Apertura 2021", name:"Talleres", logo:"https://media.api-sports.io/football/teams/3427.png" },
    { year:2020, season:"2020", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2019, season:"Superliga 19/20", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2019, season:"Superliga 18/19", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2018, season:"Superliga 17/18", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2017, season:"Clausura 2017", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2017, season:"Apertura 2017", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2016, season:"Clausura 2016", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2016, season:"Apertura 2016", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:2015, season:"Final 2015", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2015, season:"Transición 2015", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2014, season:"Final 2014", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2014, season:"Inicial 2013/14", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2013, season:"Final 2013", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2013, season:"Inicial 2012/13", name:"Newell's Old Boys", logo:"https://media.api-sports.io/football/teams/446.png" },
    { year:2012, season:"Final 2012", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2012, season:"Inicial 2011/12", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2011, season:"Clausura 2011", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:2011, season:"Apertura 2011", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2010, season:"Clausura 2010", name:"Argentinos Juniors", logo:"https://media.api-sports.io/football/teams/445.png" },
    { year:2010, season:"Apertura 2010", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:2009, season:"Clausura 2009", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2009, season:"Apertura 2009", name:"Banfield", logo:"https://media.api-sports.io/football/teams/447.png" },
    { year:2008, season:"Clausura 2008", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2008, season:"Apertura 2008", name:"Lanús", logo:"https://media.api-sports.io/football/teams/443.png" },
    { year:2007, season:"Clausura 2007", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:2007, season:"Apertura 2007", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2006, season:"Clausura 2006", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:2006, season:"Apertura 2006", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2005, season:"Clausura 2005", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2005, season:"Apertura 2005", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2004, season:"Clausura 2004", name:"Newell's Old Boys", logo:"https://media.api-sports.io/football/teams/446.png" },
    { year:2004, season:"Apertura 2004", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2003, season:"Clausura 2003", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2003, season:"Apertura 2003", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2002, season:"Clausura 2002", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2002, season:"Apertura 2002", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2001, season:"Clausura 2001", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2001, season:"Apertura 2001", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2000, season:"Clausura 2000", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2000, season:"Apertura 2000", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1999, season:"Clausura 1999", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1999, season:"Apertura 1999", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1998, season:"Clausura 1998", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:1998, season:"Apertura 1998", name:"Huracán", logo:"https://media.api-sports.io/football/teams/439.png" },
    { year:1997, season:"Clausura 1997", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1997, season:"Apertura 1997", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1996, season:"Clausura 1996", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1996, season:"Apertura 1996", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:1995, season:"Clausura 1995", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1995, season:"Apertura 1995", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1994, season:"Clausura 1994", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1994, season:"Apertura 1994", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1993, season:"Clausura 1993", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1993, season:"Apertura 1993", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:1992, season:"Clausura 1992", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1992, season:"Apertura 1992", name:"Newell's Old Boys", logo:"https://media.api-sports.io/football/teams/446.png" },
    { year:1991, season:"Clausura 1991", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1991, season:"Apertura 1991", name:"Newell's Old Boys", logo:"https://media.api-sports.io/football/teams/446.png" },
    { year:1990, season:"Clausura 1990", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1990, season:"Apertura 1990", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1988, season:"1988", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:1987, season:"1987", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:1986, season:"1986", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1985, season:"1985", name:"Argentinos Juniors", logo:"https://media.api-sports.io/football/teams/445.png" },
    { year:1984, season:"1984", name:"Ferro Carril Oeste", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1983, season:"1983", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1982, season:"1982", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1981, season:"1981", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1980, season:"1980", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:1979, season:"1979", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1978, season:"1978", name:"Quilmes", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1977, season:"1977", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1976, season:"Metropolitano 1976", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1976, season:"Nacional 1976", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1975, season:"Metropolitano 1975", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1975, season:"Nacional 1975", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1974, season:"Metropolitano 1974", name:"Newell's Old Boys", logo:"https://media.api-sports.io/football/teams/446.png" },
    { year:1974, season:"Nacional 1974", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1973, season:"Metropolitano 1973", name:"Huracán", logo:"https://media.api-sports.io/football/teams/439.png" },
    { year:1973, season:"Nacional 1973", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:1972, season:"Metropolitano 1972", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1972, season:"Nacional 1972", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1971, season:"Metropolitano 1971", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1971, season:"Nacional 1971", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:1970, season:"Metropolitano 1970", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1970, season:"Nacional 1970", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1969, season:"Metropolitano 1969", name:"Chacarita Juniors", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1969, season:"Nacional 1969", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1968, season:"Metropolitano 1968", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1968, season:"Nacional 1968", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:1967, season:"Metropolitano 1967", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1967, season:"Nacional 1967", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1966, season:"1966", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1965, season:"1965", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1964, season:"1964", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1963, season:"1963", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1962, season:"1962", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1961, season:"1961", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1960, season:"1960", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1959, season:"1959", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1958, season:"1958", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1957, season:"1957", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1956, season:"1956", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1955, season:"1955", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1954, season:"1954", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1953, season:"1953", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1952, season:"1952", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1951, season:"1951", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1950, season:"1950", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1949, season:"1949", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1948, season:"1948", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1947, season:"1947", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1946, season:"1946", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1945, season:"1945", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1944, season:"1944", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1943, season:"1943", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1942, season:"1942", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1941, season:"1941", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1940, season:"1940", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1939, season:"1939", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1938, season:"1938", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1937, season:"1937", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1936, season:"1936", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1935, season:"1935", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1934, season:"1934", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1933, season:"1933", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:1932, season:"1932", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1931, season:"1931", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
  ]},
  arg_copa: { label: "Copa Argentina", items: [
    { year:2024, season:"2024", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2023, season:"2023", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:2022, season:"2022", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2021, season:"2021", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2019, season:"2019", name:"Central Córdoba", logo:"https://media.api-sports.io/football/teams/451.png" },
    { year:2018, season:"2018", name:"Rosario Central", logo:"https://media.api-sports.io/football/teams/437.png" },
    { year:2017, season:"2017", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2016, season:"2016", name:"Huracán", logo:"https://media.api-sports.io/football/teams/439.png" },
    { year:2015, season:"2015", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2014, season:"2014", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2013, season:"2013", name:"Tucumán", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2012, season:"2012", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2011, season:"2011", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2010, season:"2010", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2009, season:"2009", name:"Unión", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2008, season:"2008", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2007, season:"2007", name:"Argentinos Juniors", logo:"https://media.api-sports.io/football/teams/445.png" },
    { year:2006, season:"2006", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2005, season:"2005", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:2004, season:"2004", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2002, season:"2002", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2001, season:"2001", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2000, season:"2000", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1999, season:"1999", name:"Lanús", logo:"https://media.api-sports.io/football/teams/443.png" },
    { year:1997, season:"1997", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1992, season:"1992", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
  ]},
  esp_liga: { label: "LaLiga", items: [
    { year:2024, season:"2024/25", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2023, season:"2023/24", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2022, season:"2022/23", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2021, season:"2021/22", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2020, season:"2020/21", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:2019, season:"2019/20", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2018, season:"2018/19", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2017, season:"2017/18", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2016, season:"2016/17", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2015, season:"2015/16", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2014, season:"2014/15", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2013, season:"2013/14", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:2012, season:"2012/13", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2011, season:"2011/12", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2010, season:"2010/11", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2009, season:"2009/10", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2008, season:"2008/09", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2007, season:"2007/08", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2006, season:"2006/07", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2005, season:"2005/06", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2004, season:"2004/05", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2003, season:"2003/04", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2002, season:"2002/03", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2001, season:"2001/02", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2000, season:"2000/01", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1999, season:"1999/00", name:"Deportivo La Coruña", logo:"https://media.api-sports.io/football/teams/538.png" },
    { year:1998, season:"1998/99", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1997, season:"1997/98", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1996, season:"1996/97", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1995, season:"1995/96", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1994, season:"1994/95", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1993, season:"1993/94", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1992, season:"1992/93", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1991, season:"1991/92", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1990, season:"1990/91", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1989, season:"1989/90", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1988, season:"1988/89", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1987, season:"1987/88", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1986, season:"1986/87", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1985, season:"1985/86", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1984, season:"1984/85", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1983, season:"1983/84", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1982, season:"1982/83", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1981, season:"1981/82", name:"Real Sociedad", logo:"https://media.api-sports.io/football/teams/543.png" },
    { year:1980, season:"1980/81", name:"Real Sociedad", logo:"https://media.api-sports.io/football/teams/543.png" },
    { year:1979, season:"1979/80", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1978, season:"1978/79", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1977, season:"1977/78", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1976, season:"1976/77", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1975, season:"1975/76", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1974, season:"1974/75", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1973, season:"1973/74", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1972, season:"1972/73", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1971, season:"1971/72", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1970, season:"1970/71", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1969, season:"1969/70", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1968, season:"1968/69", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1967, season:"1967/68", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1966, season:"1966/67", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1965, season:"1965/66", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1964, season:"1964/65", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1963, season:"1963/64", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1962, season:"1962/63", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1961, season:"1961/62", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1960, season:"1960/61", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1959, season:"1959/60", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1958, season:"1958/59", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1957, season:"1957/58", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1956, season:"1956/57", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1955, season:"1955/56", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1954, season:"1954/55", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1953, season:"1953/54", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1952, season:"1952/53", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1951, season:"1951/52", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1950, season:"1950/51", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1949, season:"1949/50", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1948, season:"1948/49", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1947, season:"1947/48", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1946, season:"1946/47", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1945, season:"1945/46", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:1944, season:"1944/45", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1943, season:"1943/44", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1942, season:"1942/43", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1941, season:"1941/42", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1940, season:"1940/41", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1939, season:"1939/40", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1935, season:"1935/36", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1934, season:"1934/35", name:"Real Betis", logo:"https://media.api-sports.io/football/teams/536.png" },
    { year:1933, season:"1933/34", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1932, season:"1932/33", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1931, season:"1931/32", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1930, season:"1930/31", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1929, season:"1929/30", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1929, season:"1928/29", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
  ]},
  esp_copa: { label: "Copa del Rey", items: [
    { year:2024, season:"2023/24", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:2023, season:"2022/23", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:2022, season:"2021/22", name:"Real Betis", logo:"https://media.api-sports.io/football/teams/536.png" },
    { year:2021, season:"2020/21", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2020, season:"2019/20", name:"Real Sociedad", logo:"https://media.api-sports.io/football/teams/543.png" },
    { year:2019, season:"2018/19", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2018, season:"2017/18", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2017, season:"2016/17", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2016, season:"2015/16", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2015, season:"2014/15", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:2014, season:"2013/14", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2013, season:"2012/13", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2012, season:"2011/12", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2011, season:"2010/11", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2010, season:"2009/10", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2009, season:"2008/09", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2008, season:"2007/08", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2007, season:"2006/07", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2006, season:"2005/06", name:"Espanyol", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2005, season:"2004/05", name:"Real Betis", logo:"https://media.api-sports.io/football/teams/536.png" },
    { year:2004, season:"2003/04", name:"Real Zaragoza", logo:"https://media.api-sports.io/football/teams/545.png" },
    { year:2003, season:"2002/03", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2002, season:"2001/02", name:"Deportivo La Coruña", logo:"https://media.api-sports.io/football/teams/538.png" },
    { year:2001, season:"2000/01", name:"Real Zaragoza", logo:"https://media.api-sports.io/football/teams/545.png" },
    { year:2000, season:"1999/00", name:"Espanyol", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1999, season:"1998/99", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1998, season:"1997/98", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1997, season:"1996/97", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1996, season:"1995/96", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1995, season:"1994/95", name:"Deportivo La Coruña", logo:"https://media.api-sports.io/football/teams/538.png" },
    { year:1994, season:"1993/94", name:"Real Zaragoza", logo:"https://media.api-sports.io/football/teams/545.png" },
    { year:1993, season:"1992/93", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1992, season:"1991/92", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1991, season:"1990/91", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1990, season:"1989/90", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1989, season:"1988/89", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1988, season:"1987/88", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1987, season:"1986/87", name:"Real Sociedad", logo:"https://media.api-sports.io/football/teams/543.png" },
    { year:1986, season:"1985/86", name:"Zaragoza", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1985, season:"1984/85", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1984, season:"1983/84", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1983, season:"1982/83", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1982, season:"1981/82", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1981, season:"1980/81", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1980, season:"1979/80", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1979, season:"1978/79", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1978, season:"1977/78", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1977, season:"1976/77", name:"Betis", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1976, season:"1975/76", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1975, season:"1974/75", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1974, season:"1973/74", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1973, season:"1972/73", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1972, season:"1971/72", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:1971, season:"1970/71", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1970, season:"1969/70", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1969, season:"1968/69", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1968, season:"1967/68", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1967, season:"1966/67", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1966, season:"1965/66", name:"Real Zaragoza", logo:"https://media.api-sports.io/football/teams/545.png" },
    { year:1965, season:"1964/65", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1964, season:"1963/64", name:"Real Zaragoza", logo:"https://media.api-sports.io/football/teams/545.png" },
    { year:1963, season:"1962/63", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1962, season:"1961/62", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1961, season:"1960/61", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1960, season:"1959/60", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1959, season:"1958/59", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1958, season:"1957/58", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1957, season:"1956/57", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1956, season:"1955/56", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1955, season:"1954/55", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:1954, season:"1953/54", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:1953, season:"1952/53", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
  ]},
  esp_super: { label: "Supercopa España", items: [
    { year:2025, season:"2025", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2024, season:"2024", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2023, season:"2023", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2022, season:"2022", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2021, season:"2021", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:2020, season:"2020", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2019, season:"2019", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2018, season:"2018", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2017, season:"2017", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2016, season:"2016", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2015, season:"2015", name:"Athletic Club", logo:"https://media.api-sports.io/football/teams/531.png" },
    { year:2014, season:"2014", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2013, season:"2013", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2012, season:"2012", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2011, season:"2011", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2010, season:"2010", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2009, season:"2009", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2008, season:"2008", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2007, season:"2007", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2006, season:"2006", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2005, season:"2005", name:"Betis", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2004, season:"2004", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2003, season:"2003", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2002, season:"2002", name:"Deportivo La Coruña", logo:"https://media.api-sports.io/football/teams/538.png" },
    { year:2001, season:"2001", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2000, season:"2000", name:"Deportivo La Coruña", logo:"https://media.api-sports.io/football/teams/538.png" },
  ]},
  eng_liga: { label: "Premier League", items: [
    { year:2024, season:"2024/25", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2023, season:"2023/24", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2022, season:"2022/23", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2021, season:"2021/22", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2020, season:"2020/21", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2019, season:"2019/20", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2018, season:"2018/19", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2017, season:"2017/18", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2016, season:"2016/17", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2015, season:"2015/16", name:"Leicester City", logo:"https://media.api-sports.io/football/teams/46.png" },
    { year:2014, season:"2014/15", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2013, season:"2013/14", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2012, season:"2012/13", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2011, season:"2011/12", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2010, season:"2010/11", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2009, season:"2009/10", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2008, season:"2008/09", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2007, season:"2007/08", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2006, season:"2006/07", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2005, season:"2005/06", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2004, season:"2004/05", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2003, season:"2003/04", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2002, season:"2002/03", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2001, season:"2001/02", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2000, season:"2000/01", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1999, season:"1999/00", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1998, season:"1998/99", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1997, season:"1997/98", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1996, season:"1996/97", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1995, season:"1995/96", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1994, season:"1994/95", name:"Blackburn Rovers", logo:"https://media.api-sports.io/football/teams/67.png" },
    { year:1993, season:"1993/94", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1992, season:"1992/93", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1991, season:"1991/92", name:"Leeds United", logo:"https://media.api-sports.io/football/teams/63.png" },
    { year:1990, season:"1990/91", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1989, season:"1989/90", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1988, season:"1988/89", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1987, season:"1987/88", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1986, season:"1986/87", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1985, season:"1985/86", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1984, season:"1984/85", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1983, season:"1983/84", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1982, season:"1982/83", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1981, season:"1981/82", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1980, season:"1980/81", name:"Aston Villa", logo:"https://media.api-sports.io/football/teams/66.png" },
    { year:1979, season:"1979/80", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1978, season:"1978/79", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1977, season:"1977/78", name:"Nottingham Forest", logo:"https://media.api-sports.io/football/teams/65.png" },
    { year:1976, season:"1976/77", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1975, season:"1975/76", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1974, season:"1974/75", name:"Derby County", logo:"https://media.api-sports.io/football/teams/60.png" },
    { year:1973, season:"1973/74", name:"Leeds United", logo:"https://media.api-sports.io/football/teams/63.png" },
    { year:1972, season:"1972/73", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1971, season:"1971/72", name:"Derby County", logo:"https://media.api-sports.io/football/teams/60.png" },
    { year:1970, season:"1970/71", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1969, season:"1969/70", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1968, season:"1968/69", name:"Leeds United", logo:"https://media.api-sports.io/football/teams/63.png" },
    { year:1967, season:"1967/68", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:1966, season:"1966/67", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1965, season:"1965/66", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1964, season:"1964/65", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1963, season:"1963/64", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1962, season:"1962/63", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1961, season:"1961/62", name:"Ipswich Town", logo:"https://media.api-sports.io/football/teams/57.png" },
    { year:1960, season:"1960/61", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1959, season:"1959/60", name:"Burnley", logo:"https://media.api-sports.io/football/teams/44.png" },
    { year:1958, season:"1958/59", name:"Wolves", logo:"https://media.api-sports.io/football/teams/39.png" },
    { year:1957, season:"1957/58", name:"Wolves", logo:"https://media.api-sports.io/football/teams/39.png" },
    { year:1956, season:"1956/57", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1955, season:"1955/56", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1954, season:"1954/55", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:1953, season:"1953/54", name:"Wolves", logo:"https://media.api-sports.io/football/teams/39.png" },
    { year:1952, season:"1952/53", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1951, season:"1951/52", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1950, season:"1950/51", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1949, season:"1949/50", name:"Portsmouth", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1948, season:"1948/49", name:"Portsmouth", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1947, season:"1947/48", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1946, season:"1946/47", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1938, season:"1938/39", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1937, season:"1937/38", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1936, season:"1936/37", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:1935, season:"1935/36", name:"Sunderland", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1934, season:"1934/35", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1933, season:"1933/34", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1932, season:"1932/33", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1931, season:"1931/32", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1930, season:"1930/31", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1929, season:"1929/30", name:"Sheffield Wednesday", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1928, season:"1928/29", name:"Sheffield Wednesday", logo:"https://media.api-sports.io/football/teams/0.png" },
  ]},
  eng_copa: { label: "FA Cup", items: [
    { year:2024, season:"2023/24", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2023, season:"2022/23", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2022, season:"2021/22", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2021, season:"2020/21", name:"Leicester City", logo:"https://media.api-sports.io/football/teams/46.png" },
    { year:2020, season:"2019/20", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2019, season:"2018/19", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2018, season:"2017/18", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2017, season:"2016/17", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2016, season:"2015/16", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2015, season:"2014/15", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2014, season:"2013/14", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2013, season:"2012/13", name:"Wigan Athletic", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2012, season:"2011/12", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2011, season:"2010/11", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2010, season:"2009/10", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2009, season:"2008/09", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2008, season:"2007/08", name:"Portsmouth", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2007, season:"2006/07", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2006, season:"2005/06", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2005, season:"2004/05", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2004, season:"2003/04", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2003, season:"2002/03", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2002, season:"2001/02", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:2001, season:"2000/01", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2000, season:"1999/00", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:1999, season:"1998/99", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1998, season:"1997/98", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1997, season:"1996/97", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:1996, season:"1995/96", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1995, season:"1994/95", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1994, season:"1993/94", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1993, season:"1992/93", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1992, season:"1991/92", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1991, season:"1990/91", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1990, season:"1989/90", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1989, season:"1988/89", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1988, season:"1987/88", name:"Wimbledon", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1987, season:"1986/87", name:"Coventry City", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1986, season:"1985/86", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1985, season:"1984/85", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1984, season:"1983/84", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1983, season:"1982/83", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1982, season:"1981/82", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1981, season:"1980/81", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1980, season:"1979/80", name:"West Ham", logo:"https://media.api-sports.io/football/teams/48.png" },
    { year:1979, season:"1978/79", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1978, season:"1977/78", name:"Ipswich Town", logo:"https://media.api-sports.io/football/teams/57.png" },
    { year:1977, season:"1976/77", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1976, season:"1975/76", name:"Southampton", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1975, season:"1974/75", name:"West Ham", logo:"https://media.api-sports.io/football/teams/48.png" },
    { year:1974, season:"1973/74", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1973, season:"1972/73", name:"Sunderland", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1972, season:"1971/72", name:"Leeds United", logo:"https://media.api-sports.io/football/teams/63.png" },
    { year:1971, season:"1970/71", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1970, season:"1969/70", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:1969, season:"1968/69", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:1968, season:"1967/68", name:"West Brom", logo:"https://media.api-sports.io/football/teams/58.png" },
    { year:1967, season:"1966/67", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1966, season:"1965/66", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:1965, season:"1964/65", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1964, season:"1963/64", name:"West Ham", logo:"https://media.api-sports.io/football/teams/48.png" },
    { year:1963, season:"1962/63", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
  ]},
  eng_carabao: { label: "League Cup", items: [
    { year:2024, season:"2023/24", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2023, season:"2022/23", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2022, season:"2021/22", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2021, season:"2020/21", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2020, season:"2019/20", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2019, season:"2018/19", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2018, season:"2017/18", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2017, season:"2016/17", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2016, season:"2015/16", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2015, season:"2014/15", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2014, season:"2013/14", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2013, season:"2012/13", name:"Swansea City", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2012, season:"2011/12", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2011, season:"2010/11", name:"Birmingham City", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2010, season:"2009/10", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2009, season:"2008/09", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2008, season:"2007/08", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:2007, season:"2006/07", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2006, season:"2005/06", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2005, season:"2004/05", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2004, season:"2003/04", name:"Middlesbrough", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2003, season:"2002/03", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2002, season:"2001/02", name:"Blackburn Rovers", logo:"https://media.api-sports.io/football/teams/67.png" },
    { year:2001, season:"2000/01", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2000, season:"1999/00", name:"Leicester City", logo:"https://media.api-sports.io/football/teams/46.png" },
    { year:1999, season:"1998/99", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1998, season:"1997/98", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:1997, season:"1996/97", name:"Leicester City", logo:"https://media.api-sports.io/football/teams/46.png" },
    { year:1996, season:"1995/96", name:"Aston Villa", logo:"https://media.api-sports.io/football/teams/66.png" },
    { year:1995, season:"1994/95", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1994, season:"1993/94", name:"Aston Villa", logo:"https://media.api-sports.io/football/teams/66.png" },
    { year:1993, season:"1992/93", name:"Arsenal", logo:"https://media.api-sports.io/football/teams/42.png" },
    { year:1992, season:"1991/92", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1991, season:"1990/91", name:"Sheffield Wednesday", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1990, season:"1989/90", name:"Nottingham Forest", logo:"https://media.api-sports.io/football/teams/65.png" },
    { year:1989, season:"1988/89", name:"Nottingham Forest", logo:"https://media.api-sports.io/football/teams/65.png" },
  ]},
  ita_liga: { label: "Serie A", items: [
    { year:2024, season:"2024/25", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:2023, season:"2023/24", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2022, season:"2022/23", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:2021, season:"2021/22", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2020, season:"2020/21", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2019, season:"2019/20", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2018, season:"2018/19", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2017, season:"2017/18", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2016, season:"2016/17", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2015, season:"2015/16", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2014, season:"2014/15", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2013, season:"2013/14", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2012, season:"2012/13", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2011, season:"2011/12", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2010, season:"2010/11", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2009, season:"2009/10", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2008, season:"2008/09", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2007, season:"2007/08", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2006, season:"2006/07", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2005, season:"2005/06", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2004, season:"2004/05", name:"Juventus (revocado)", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2003, season:"2003/04", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2002, season:"2002/03", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2001, season:"2001/02", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2000, season:"2000/01", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1999, season:"1999/00", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:1998, season:"1998/99", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1997, season:"1997/98", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1996, season:"1996/97", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1995, season:"1995/96", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1994, season:"1994/95", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1993, season:"1993/94", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1992, season:"1992/93", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1991, season:"1991/92", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1990, season:"1990/91", name:"Sampdoria", logo:"https://media.api-sports.io/football/teams/507.png" },
    { year:1989, season:"1989/90", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:1988, season:"1988/89", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1987, season:"1987/88", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1986, season:"1986/87", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:1985, season:"1985/86", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1984, season:"1984/85", name:"Hellas Verona", logo:"https://media.api-sports.io/football/teams/506.png" },
    { year:1983, season:"1983/84", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1982, season:"1982/83", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1981, season:"1981/82", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1980, season:"1980/81", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1979, season:"1979/80", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1978, season:"1978/79", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1977, season:"1977/78", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1976, season:"1976/77", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1975, season:"1975/76", name:"Torino", logo:"https://media.api-sports.io/football/teams/503.png" },
    { year:1974, season:"1974/75", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1973, season:"1973/74", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:1972, season:"1972/73", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1971, season:"1971/72", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1970, season:"1970/71", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1969, season:"1969/70", name:"Cagliari", logo:"https://media.api-sports.io/football/teams/509.png" },
    { year:1968, season:"1968/69", name:"Fiorentina", logo:"https://media.api-sports.io/football/teams/502.png" },
    { year:1967, season:"1967/68", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1966, season:"1966/67", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1965, season:"1965/66", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1964, season:"1964/65", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1963, season:"1963/64", name:"Bologna", logo:"https://media.api-sports.io/football/teams/500.png" },
    { year:1962, season:"1962/63", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1961, season:"1961/62", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1960, season:"1960/61", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1959, season:"1959/60", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1958, season:"1958/59", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1957, season:"1957/58", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1956, season:"1956/57", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1955, season:"1955/56", name:"Fiorentina", logo:"https://media.api-sports.io/football/teams/502.png" },
  ]},
  ita_copa: { label: "Coppa Italia", items: [
    { year:2024, season:"2023/24", name:"Atalanta", logo:"https://media.api-sports.io/football/teams/488.png" },
    { year:2023, season:"2022/23", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2022, season:"2021/22", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2021, season:"2020/21", name:"Atalanta", logo:"https://media.api-sports.io/football/teams/488.png" },
    { year:2020, season:"2019/20", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:2019, season:"2018/19", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:2018, season:"2017/18", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2017, season:"2016/17", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2016, season:"2015/16", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2015, season:"2014/15", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:2014, season:"2013/14", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:2013, season:"2012/13", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:2012, season:"2011/12", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:2011, season:"2010/11", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2010, season:"2009/10", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2009, season:"2008/09", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:2008, season:"2007/08", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:2007, season:"2006/07", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:2006, season:"2005/06", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2005, season:"2004/05", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2004, season:"2003/04", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:2003, season:"2002/03", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2002, season:"2001/02", name:"Parma", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2001, season:"2000/01", name:"Fiorentina", logo:"https://media.api-sports.io/football/teams/502.png" },
    { year:2000, season:"1999/00", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:1999, season:"1998/99", name:"Parma", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1998, season:"1997/98", name:"Lazio", logo:"https://media.api-sports.io/football/teams/499.png" },
    { year:1997, season:"1996/97", name:"Vicenza", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1996, season:"1995/96", name:"Fiorentina", logo:"https://media.api-sports.io/football/teams/502.png" },
    { year:1995, season:"1994/95", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1994, season:"1993/94", name:"Sampdoria", logo:"https://media.api-sports.io/football/teams/507.png" },
    { year:1993, season:"1992/93", name:"Torino", logo:"https://media.api-sports.io/football/teams/503.png" },
    { year:1992, season:"1991/92", name:"Parma", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1991, season:"1990/91", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1990, season:"1989/90", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1989, season:"1988/89", name:"Sampdoria", logo:"https://media.api-sports.io/football/teams/507.png" },
    { year:1988, season:"1987/88", name:"Sampdoria", logo:"https://media.api-sports.io/football/teams/507.png" },
    { year:1987, season:"1986/87", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:1986, season:"1985/86", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1985, season:"1984/85", name:"Sampdoria", logo:"https://media.api-sports.io/football/teams/507.png" },
    { year:1984, season:"1983/84", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1983, season:"1982/83", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1982, season:"1981/82", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1981, season:"1980/81", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1980, season:"1979/80", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
    { year:1979, season:"1978/79", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
  ]},
  ger_liga: { label: "Bundesliga", items: [
    { year:2024, season:"2024/25", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2023, season:"2023/24", name:"Bayer Leverkusen", logo:"https://media.api-sports.io/football/teams/168.png" },
    { year:2022, season:"2022/23", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2021, season:"2021/22", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2020, season:"2020/21", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2019, season:"2019/20", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2018, season:"2018/19", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2017, season:"2017/18", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2016, season:"2016/17", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2015, season:"2015/16", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2014, season:"2014/15", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2013, season:"2013/14", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2012, season:"2012/13", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2011, season:"2011/12", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:2010, season:"2010/11", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:2009, season:"2009/10", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2008, season:"2008/09", name:"Wolfsburg", logo:"https://media.api-sports.io/football/teams/167.png" },
    { year:2007, season:"2007/08", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2006, season:"2006/07", name:"VfB Stuttgart", logo:"https://media.api-sports.io/football/teams/161.png" },
    { year:2005, season:"2005/06", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2004, season:"2004/05", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2003, season:"2003/04", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:2002, season:"2002/03", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2001, season:"2001/02", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:2000, season:"2000/01", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1999, season:"1999/00", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1998, season:"1998/99", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1997, season:"1997/98", name:"Kaiserslautern", logo:"https://media.api-sports.io/football/teams/171.png" },
    { year:1996, season:"1996/97", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1995, season:"1995/96", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:1994, season:"1994/95", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:1993, season:"1993/94", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1992, season:"1992/93", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:1991, season:"1991/92", name:"VfB Stuttgart", logo:"https://media.api-sports.io/football/teams/161.png" },
    { year:1990, season:"1990/91", name:"Kaiserslautern", logo:"https://media.api-sports.io/football/teams/171.png" },
    { year:1989, season:"1989/90", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1988, season:"1988/89", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:1987, season:"1987/88", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:1986, season:"1986/87", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1985, season:"1985/86", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1984, season:"1984/85", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1983, season:"1983/84", name:"VfB Stuttgart", logo:"https://media.api-sports.io/football/teams/161.png" },
    { year:1982, season:"1982/83", name:"Hamburger SV", logo:"https://media.api-sports.io/football/teams/164.png" },
    { year:1981, season:"1981/82", name:"Hamburger SV", logo:"https://media.api-sports.io/football/teams/164.png" },
    { year:1980, season:"1980/81", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1979, season:"1979/80", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1978, season:"1978/79", name:"Hamburger SV", logo:"https://media.api-sports.io/football/teams/164.png" },
    { year:1977, season:"1977/78", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1976, season:"1976/77", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1975, season:"1975/76", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1974, season:"1974/75", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1973, season:"1973/74", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1972, season:"1972/73", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1971, season:"1971/72", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1970, season:"1970/71", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1969, season:"1969/70", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1968, season:"1968/69", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1967, season:"1967/68", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:1966, season:"1966/67", name:"Eintracht Frankfurt", logo:"https://media.api-sports.io/football/teams/169.png" },
    { year:1965, season:"1965/66", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1964, season:"1964/65", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:1963, season:"1963/64", name:"Cologne", logo:"https://media.api-sports.io/football/teams/0.png" },
  ]},
  ger_copa: { label: "DFB Pokal", items: [
    { year:2024, season:"2023/24", name:"Bayer Leverkusen", logo:"https://media.api-sports.io/football/teams/168.png" },
    { year:2023, season:"2022/23", name:"RB Leipzig", logo:"https://media.api-sports.io/football/teams/173.png" },
    { year:2022, season:"2021/22", name:"RB Leipzig", logo:"https://media.api-sports.io/football/teams/173.png" },
    { year:2021, season:"2020/21", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:2020, season:"2019/20", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2019, season:"2018/19", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2018, season:"2017/18", name:"Eintracht Frankfurt", logo:"https://media.api-sports.io/football/teams/169.png" },
    { year:2017, season:"2016/17", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:2016, season:"2015/16", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2015, season:"2014/15", name:"VfL Wolfsburg", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2014, season:"2013/14", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2013, season:"2012/13", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2012, season:"2011/12", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2011, season:"2010/11", name:"Schalke 04", logo:"https://media.api-sports.io/football/teams/166.png" },
    { year:2010, season:"2009/10", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2009, season:"2008/09", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:2008, season:"2007/08", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2007, season:"2006/07", name:"Nuremberg", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2006, season:"2005/06", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2005, season:"2004/05", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2004, season:"2003/04", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:2003, season:"2002/03", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2002, season:"2001/02", name:"Schalke 04", logo:"https://media.api-sports.io/football/teams/166.png" },
    { year:2001, season:"2000/01", name:"Schalke 04", logo:"https://media.api-sports.io/football/teams/166.png" },
    { year:2000, season:"1999/00", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1999, season:"1998/99", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:1998, season:"1997/98", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1997, season:"1996/97", name:"VfB Stuttgart", logo:"https://media.api-sports.io/football/teams/161.png" },
    { year:1996, season:"1995/96", name:"Kaiserslautern", logo:"https://media.api-sports.io/football/teams/171.png" },
    { year:1995, season:"1994/95", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1994, season:"1993/94", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:1993, season:"1992/93", name:"Bayer Leverkusen", logo:"https://media.api-sports.io/football/teams/168.png" },
    { year:1992, season:"1991/92", name:"Hannover 96", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1991, season:"1990/91", name:"Werder Bremen", logo:"https://media.api-sports.io/football/teams/162.png" },
    { year:1990, season:"1989/90", name:"Kaiserslautern", logo:"https://media.api-sports.io/football/teams/171.png" },
    { year:1989, season:"1988/89", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:1988, season:"1987/88", name:"Eintracht Frankfurt", logo:"https://media.api-sports.io/football/teams/169.png" },
    { year:1987, season:"1986/87", name:"Hamburger SV", logo:"https://media.api-sports.io/football/teams/164.png" },
    { year:1986, season:"1985/86", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1985, season:"1984/85", name:"Bayer Uerdingen", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1984, season:"1983/84", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1983, season:"1982/83", name:"Cologne", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1982, season:"1981/82", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1981, season:"1980/81", name:"Eintracht Frankfurt", logo:"https://media.api-sports.io/football/teams/169.png" },
    { year:1980, season:"1979/80", name:"Fortuna Düsseldorf", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1979, season:"1978/79", name:"Fortuna Düsseldorf", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1978, season:"1977/78", name:"Cologne", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1977, season:"1976/77", name:"Cologne", logo:"https://media.api-sports.io/football/teams/0.png" },
  ]},
  fra_liga: { label: "Ligue 1", items: [
    { year:2024, season:"2024/25", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2023, season:"2023/24", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2022, season:"2022/23", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2021, season:"2021/22", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2020, season:"2020/21", name:"Lille", logo:"https://media.api-sports.io/football/teams/82.png" },
    { year:2019, season:"2019/20", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2018, season:"2018/19", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2017, season:"2017/18", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2016, season:"2016/17", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:2015, season:"2015/16", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2014, season:"2014/15", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2013, season:"2013/14", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2012, season:"2012/13", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2011, season:"2011/12", name:"Montpellier", logo:"https://media.api-sports.io/football/teams/84.png" },
    { year:2010, season:"2010/11", name:"Lille", logo:"https://media.api-sports.io/football/teams/82.png" },
    { year:2009, season:"2009/10", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:2008, season:"2008/09", name:"Bordeaux", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:2007, season:"2007/08", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2006, season:"2006/07", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2005, season:"2005/06", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2004, season:"2004/05", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2003, season:"2003/04", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2002, season:"2002/03", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2001, season:"2001/02", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2000, season:"2000/01", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1999, season:"1999/00", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1998, season:"1998/99", name:"Lens", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:1997, season:"1997/98", name:"Lens", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:1996, season:"1996/97", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1995, season:"1995/96", name:"Auxerre", logo:"https://media.api-sports.io/football/teams/88.png" },
    { year:1994, season:"1994/95", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1993, season:"1993/94", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:1992, season:"1992/93", name:"Marseille (revocado)", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1991, season:"1991/92", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1990, season:"1990/91", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1989, season:"1989/90", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1988, season:"1988/89", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1987, season:"1987/88", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1986, season:"1986/87", name:"Bordeaux", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1985, season:"1985/86", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:1984, season:"1984/85", name:"Bordeaux", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1983, season:"1983/84", name:"Bordeaux", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1982, season:"1982/83", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1981, season:"1981/82", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1980, season:"1980/81", name:"Metz", logo:"https://media.api-sports.io/football/teams/91.png" },
    { year:1979, season:"1979/80", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1978, season:"1978/79", name:"Strasbourg", logo:"https://media.api-sports.io/football/teams/95.png" },
    { year:1977, season:"1977/78", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1976, season:"1976/77", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1975, season:"1975/76", name:"Nice", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1974, season:"1974/75", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1973, season:"1973/74", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1972, season:"1972/73", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1971, season:"1971/72", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1970, season:"1970/71", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1969, season:"1969/70", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1968, season:"1968/69", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1967, season:"1967/68", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1966, season:"1966/67", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1965, season:"1965/66", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1964, season:"1964/65", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1963, season:"1963/64", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1962, season:"1962/63", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1961, season:"1961/62", name:"Reims", logo:"https://media.api-sports.io/football/teams/91.png" },
    { year:1960, season:"1960/61", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:1959, season:"1959/60", name:"Reims", logo:"https://media.api-sports.io/football/teams/91.png" },
    { year:1958, season:"1958/59", name:"Nice", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1957, season:"1957/58", name:"Reims", logo:"https://media.api-sports.io/football/teams/91.png" },
    { year:1956, season:"1956/57", name:"Saint-Etienne", logo:"https://media.api-sports.io/football/teams/86.png" },
    { year:1955, season:"1955/56", name:"Nice", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1954, season:"1954/55", name:"Reims", logo:"https://media.api-sports.io/football/teams/91.png" },
    { year:1953, season:"1953/54", name:"Lille", logo:"https://media.api-sports.io/football/teams/82.png" },
  ]},
  fra_copa: { label: "Coupe de France", items: [
    { year:2024, season:"2023/24", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2023, season:"2022/23", name:"Toulouse", logo:"https://media.api-sports.io/football/teams/79.png" },
    { year:2022, season:"2021/22", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:2021, season:"2020/21", name:"Monaco", logo:"https://media.api-sports.io/football/teams/97.png" },
    { year:2020, season:"2019/20", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2019, season:"2018/19", name:"Rennes", logo:"https://media.api-sports.io/football/teams/94.png" },
    { year:2018, season:"2017/18", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2017, season:"2016/17", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2016, season:"2015/16", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2015, season:"2014/15", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2014, season:"2013/14", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2013, season:"2012/13", name:"Lorient", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2012, season:"2011/12", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2011, season:"2010/11", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:2010, season:"2009/10", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2009, season:"2008/09", name:"Gueugnon", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2008, season:"2007/08", name:"Lyon", logo:"https://media.api-sports.io/football/teams/80.png" },
    { year:2007, season:"2006/07", name:"Sochaux", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2006, season:"2005/06", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2005, season:"2004/05", name:"Auxerre", logo:"https://media.api-sports.io/football/teams/88.png" },
    { year:2004, season:"2003/04", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2003, season:"2002/03", name:"AJ Auxerre", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2002, season:"2001/02", name:"Lorient", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2001, season:"2000/01", name:"Strasbourg", logo:"https://media.api-sports.io/football/teams/95.png" },
    { year:2000, season:"1999/00", name:"Nantes", logo:"https://media.api-sports.io/football/teams/93.png" },
    { year:1999, season:"1998/99", name:"Lens", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:1998, season:"1997/98", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:1997, season:"1996/97", name:"Nice", logo:"https://media.api-sports.io/football/teams/83.png" },
    { year:1996, season:"1995/96", name:"Metz", logo:"https://media.api-sports.io/football/teams/91.png" },
    { year:1995, season:"1994/95", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
  ]},
  por_liga: { label: "Liga Portugal", items: [
    { year:2024, season:"2024/25", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2023, season:"2023/24", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:2022, season:"2022/23", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2021, season:"2021/22", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2020, season:"2020/21", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:2019, season:"2019/20", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2018, season:"2018/19", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2017, season:"2017/18", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2016, season:"2016/17", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2015, season:"2015/16", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2014, season:"2014/15", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2013, season:"2013/14", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2012, season:"2012/13", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2011, season:"2011/12", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2010, season:"2010/11", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2009, season:"2009/10", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2008, season:"2008/09", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2007, season:"2007/08", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2006, season:"2006/07", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2005, season:"2005/06", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2004, season:"2004/05", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:2003, season:"2003/04", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2002, season:"2002/03", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2001, season:"2001/02", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:2000, season:"2000/01", name:"Boavista", logo:"https://media.api-sports.io/football/teams/218.png" },
    { year:1999, season:"1999/00", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:1998, season:"1998/99", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1997, season:"1997/98", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1996, season:"1996/97", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1995, season:"1995/96", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1994, season:"1994/95", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1993, season:"1993/94", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1992, season:"1992/93", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1991, season:"1991/92", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1990, season:"1990/91", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1989, season:"1989/90", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1988, season:"1988/89", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1987, season:"1987/88", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1986, season:"1986/87", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1985, season:"1985/86", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1984, season:"1984/85", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1983, season:"1983/84", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1982, season:"1982/83", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:1981, season:"1981/82", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:1980, season:"1980/81", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1979, season:"1979/80", name:"Sporting CP", logo:"https://media.api-sports.io/football/teams/228.png" },
    { year:1978, season:"1977/78", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1977, season:"1976/77", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1976, season:"1975/76", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1975, season:"1974/75", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
  ]},
  bra_liga: { label: "Brasileirão", items: [
    { year:2024, season:"2024", name:"Botafogo", logo:"https://media.api-sports.io/football/teams/1512.png" },
    { year:2023, season:"2023", name:"Atletico Mineiro", logo:"https://media.api-sports.io/football/teams/1062.png" },
    { year:2022, season:"2022", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2021, season:"2021", name:"Atletico Mineiro", logo:"https://media.api-sports.io/football/teams/1062.png" },
    { year:2020, season:"2020", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2019, season:"2019", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2018, season:"2018", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2017, season:"2017", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2016, season:"2016", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2015, season:"2015", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2014, season:"2014", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:2013, season:"2013", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:2012, season:"2012", name:"Fluminense", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:2011, season:"2011", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2010, season:"2010", name:"Fluminense", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:2009, season:"2009", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2008, season:"2008", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:2007, season:"2007", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:2006, season:"2006", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:2005, season:"2005", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2004, season:"2004", name:"Santos", logo:"https://media.api-sports.io/football/teams/122.png" },
    { year:2003, season:"2003", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:2002, season:"2002", name:"Santos", logo:"https://media.api-sports.io/football/teams/122.png" },
    { year:2001, season:"2001", name:"Atletico Paranaense", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2000, season:"2000", name:"Vasco da Gama", logo:"https://media.api-sports.io/football/teams/120.png" },
    { year:1999, season:"1999", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:1998, season:"1998", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:1997, season:"1997", name:"Vasco da Gama", logo:"https://media.api-sports.io/football/teams/120.png" },
    { year:1996, season:"1996", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:1995, season:"1995", name:"Botafogo", logo:"https://media.api-sports.io/football/teams/1512.png" },
    { year:1994, season:"1994", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:1993, season:"1993", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:1992, season:"1992", name:"Botafogo", logo:"https://media.api-sports.io/football/teams/1512.png" },
    { year:1991, season:"1991", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:1990, season:"1990", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:1989, season:"1989", name:"Vasco da Gama", logo:"https://media.api-sports.io/football/teams/120.png" },
    { year:1988, season:"1988", name:"Bahia", logo:"https://media.api-sports.io/football/teams/124.png" },
    { year:1987, season:"1987", name:"Sport Recife", logo:"https://media.api-sports.io/football/teams/133.png" },
  ]},
  bra_copa: { label: "Copa de Brasil", items: [
    { year:2024, season:"2024", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2023, season:"2023", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:2022, season:"2022", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2021, season:"2021", name:"Athletico Paranaense", logo:"https://media.api-sports.io/football/teams/119.png" },
    { year:2020, season:"2020", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2019, season:"2019", name:"Atletico Mineiro", logo:"https://media.api-sports.io/football/teams/1062.png" },
    { year:2018, season:"2018", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:2017, season:"2017", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:2016, season:"2016", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:2015, season:"2015", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2014, season:"2014", name:"Atletico Mineiro", logo:"https://media.api-sports.io/football/teams/1062.png" },
    { year:2013, season:"2013", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2012, season:"2012", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2011, season:"2011", name:"Vasco da Gama", logo:"https://media.api-sports.io/football/teams/120.png" },
    { year:2010, season:"2010", name:"Santos", logo:"https://media.api-sports.io/football/teams/122.png" },
    { year:2009, season:"2009", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2008, season:"2008", name:"Fluminense", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:2007, season:"2007", name:"Fluminense", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:2006, season:"2006", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2005, season:"2005", name:"Paulista", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2004, season:"2004", name:"Santo André", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2003, season:"2003", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:2002, season:"2002", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2001, season:"2001", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:2000, season:"2000", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:1999, season:"1999", name:"Juventude", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1998, season:"1998", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:1997, season:"1997", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:1996, season:"1996", name:"Criciúma", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1995, season:"1995", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
  ]},
  uru_liga: { label: "Liga Uruguay", items: [
    { year:2024, season:"2024", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2023, season:"2023", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2022, season:"2022", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2021, season:"2021", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2020, season:"2020", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2019, season:"2019", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2018, season:"2018", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2017, season:"2017", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2016, season:"2016", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2015, season:"2015", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2014, season:"2014", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2013, season:"2013", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2012, season:"2012", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2011, season:"2011", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2010, season:"2010", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:2009, season:"2009", name:"Defensor Sporting", logo:"https://media.api-sports.io/football/teams/2284.png" },
    { year:2008, season:"2008", name:"Lanus", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2007, season:"2007", name:"Danubio", logo:"https://media.api-sports.io/football/teams/2285.png" },
    { year:2006, season:"2006", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2005, season:"2005", name:"Danubio", logo:"https://media.api-sports.io/football/teams/2285.png" },
    { year:2004, season:"2004", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2003, season:"2003", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2002, season:"2002", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2001, season:"2001", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:2000, season:"2000", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:1999, season:"1999", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1998, season:"1998", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1997, season:"1997", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1996, season:"1996", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1995, season:"1995", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1994, season:"1994", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:1993, season:"1993", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1992, season:"1992", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:1991, season:"1991", name:"Defensor Sporting", logo:"https://media.api-sports.io/football/teams/2284.png" },
    { year:1990, season:"1990", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1989, season:"1989", name:"Progreso", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1988, season:"1988", name:"Danubio", logo:"https://media.api-sports.io/football/teams/2285.png" },
    { year:1987, season:"1987", name:"Defensor Sporting", logo:"https://media.api-sports.io/football/teams/2284.png" },
  ]},
  chi_liga: { label: "Liga Chile", items: [
    { year:2024, season:"2024", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2023, season:"2023", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2022, season:"2022", name:"Unión Española", logo:"https://media.api-sports.io/football/teams/2293.png" },
    { year:2021, season:"2021", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2020, season:"2020", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2019, season:"2019", name:"Universidad Católica", logo:"https://media.api-sports.io/football/teams/2289.png" },
    { year:2018, season:"2018", name:"Universidad Católica", logo:"https://media.api-sports.io/football/teams/2289.png" },
    { year:2017, season:"2017", name:"Universidad Católica", logo:"https://media.api-sports.io/football/teams/2289.png" },
    { year:2016, season:"2016", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2015, season:"2015", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2014, season:"Clausura 2014", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2014, season:"Apertura 2014", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2013, season:"Clausura 2013", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2013, season:"Apertura 2013", name:"Universidad Católica", logo:"https://media.api-sports.io/football/teams/2289.png" },
    { year:2012, season:"Clausura 2012", name:"Huachipato", logo:"https://media.api-sports.io/football/teams/2296.png" },
    { year:2012, season:"Apertura 2012", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2011, season:"Clausura 2011", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2011, season:"Apertura 2011", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2010, season:"Clausura 2010", name:"Cobreloa", logo:"https://media.api-sports.io/football/teams/2291.png" },
    { year:2010, season:"Apertura 2010", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2009, season:"Clausura 2009", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2009, season:"Apertura 2009", name:"Audax Italiano", logo:"https://media.api-sports.io/football/teams/2292.png" },
    { year:2008, season:"Clausura 2008", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2008, season:"Apertura 2008", name:"Rangers", logo:"https://media.api-sports.io/football/teams/2297.png" },
    { year:2007, season:"Clausura 2007", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2007, season:"Apertura 2007", name:"Everton", logo:"https://media.api-sports.io/football/teams/45.png" },
    { year:2006, season:"Clausura 2006", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2006, season:"Apertura 2006", name:"Palestino", logo:"https://media.api-sports.io/football/teams/2294.png" },
    { year:2005, season:"Clausura 2005", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2005, season:"Apertura 2005", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2004, season:"Clausura 2004", name:"Cobreloa", logo:"https://media.api-sports.io/football/teams/2291.png" },
    { year:2004, season:"Apertura 2004", name:"Cobreloa", logo:"https://media.api-sports.io/football/teams/2291.png" },
    { year:2003, season:"Clausura 2003", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2003, season:"Apertura 2003", name:"Cobreloa", logo:"https://media.api-sports.io/football/teams/2291.png" },
    { year:2002, season:"Clausura 2002", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2002, season:"Apertura 2002", name:"Santiago Wanderers", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2001, season:"Clausura 2001", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2001, season:"Apertura 2001", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2000, season:"Clausura 2000", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:2000, season:"Apertura 2000", name:"Unión Española", logo:"https://media.api-sports.io/football/teams/2293.png" },
  ]},
  col_liga: { label: "Liga Colombia", items: [
    { year:2024, season:"Clausura 2024", name:"Santa Fe", logo:"https://media.api-sports.io/football/teams/1186.png" },
    { year:2024, season:"Apertura 2024", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2023, season:"Clausura 2023", name:"Millonarios", logo:"https://media.api-sports.io/football/teams/1194.png" },
    { year:2023, season:"Apertura 2023", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2022, season:"Clausura 2022", name:"Deportes Tolima", logo:"https://media.api-sports.io/football/teams/1192.png" },
    { year:2022, season:"Apertura 2022", name:"Millonarios", logo:"https://media.api-sports.io/football/teams/1194.png" },
    { year:2021, season:"Clausura 2021", name:"Junior", logo:"https://media.api-sports.io/football/teams/1188.png" },
    { year:2021, season:"Apertura 2021", name:"Deportes Tolima", logo:"https://media.api-sports.io/football/teams/1192.png" },
    { year:2020, season:"Clausura 2020", name:"América de Cali", logo:"https://media.api-sports.io/football/teams/1185.png" },
    { year:2020, season:"Apertura 2020", name:"Junior", logo:"https://media.api-sports.io/football/teams/1188.png" },
    { year:2019, season:"Clausura 2019", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2019, season:"Apertura 2019", name:"Junior", logo:"https://media.api-sports.io/football/teams/1188.png" },
    { year:2018, season:"Clausura 2018", name:"Millonarios", logo:"https://media.api-sports.io/football/teams/1194.png" },
    { year:2018, season:"Apertura 2018", name:"Deportivo Independiente Medellín", logo:"https://media.api-sports.io/football/teams/1190.png" },
    { year:2017, season:"Clausura 2017", name:"Santa Fe", logo:"https://media.api-sports.io/football/teams/1186.png" },
    { year:2017, season:"Apertura 2017", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2016, season:"Clausura 2016", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2016, season:"Apertura 2016", name:"Deportivo Independiente Medellín", logo:"https://media.api-sports.io/football/teams/1190.png" },
    { year:2015, season:"Clausura 2015", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2015, season:"Apertura 2015", name:"Deportivo Independiente Medellín", logo:"https://media.api-sports.io/football/teams/1190.png" },
    { year:2014, season:"Clausura 2014", name:"Deportivo Cali", logo:"https://media.api-sports.io/football/teams/1187.png" },
    { year:2014, season:"Apertura 2014", name:"Santa Fe", logo:"https://media.api-sports.io/football/teams/1186.png" },
    { year:2013, season:"Clausura 2013", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2013, season:"Apertura 2013", name:"Deportivo Cali", logo:"https://media.api-sports.io/football/teams/1187.png" },
    { year:2012, season:"Clausura 2012", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2012, season:"Apertura 2012", name:"Millonarios", logo:"https://media.api-sports.io/football/teams/1194.png" },
    { year:2011, season:"Clausura 2011", name:"Once Caldas", logo:"https://media.api-sports.io/football/teams/1193.png" },
    { year:2011, season:"Apertura 2011", name:"Millonarios", logo:"https://media.api-sports.io/football/teams/1194.png" },
    { year:2010, season:"Clausura 2010", name:"Deportes Tolima", logo:"https://media.api-sports.io/football/teams/1192.png" },
    { year:2010, season:"Apertura 2010", name:"Once Caldas", logo:"https://media.api-sports.io/football/teams/1193.png" },
    { year:2009, season:"Clausura 2009", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2009, season:"Apertura 2009", name:"Envigado", logo:"https://media.api-sports.io/football/teams/1189.png" },
    { year:2008, season:"Clausura 2008", name:"Deportivo Cali", logo:"https://media.api-sports.io/football/teams/1187.png" },
    { year:2008, season:"Apertura 2008", name:"América de Cali", logo:"https://media.api-sports.io/football/teams/1185.png" },
  ]},
  lib: { label: "Copa Libertadores", items: [
    { year:2024, season:"2024", name:"Atlético Mineiro", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2023, season:"2023", name:"Fluminense", logo:"https://media.api-sports.io/football/teams/116.png" },
    { year:2022, season:"2022", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2021, season:"2021", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2020, season:"2020", name:"Palmeiras", logo:"https://media.api-sports.io/football/teams/121.png" },
    { year:2019, season:"2019", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:2018, season:"2018", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2017, season:"2017", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:2016, season:"2016", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:2015, season:"2015", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:2014, season:"2014", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2013, season:"2013", name:"Atletico Mineiro", logo:"https://media.api-sports.io/football/teams/1062.png" },
    { year:2012, season:"2012", name:"Corinthians", logo:"https://media.api-sports.io/football/teams/131.png" },
    { year:2011, season:"2011", name:"Santos", logo:"https://media.api-sports.io/football/teams/122.png" },
    { year:2010, season:"2010", name:"Internacional", logo:"https://media.api-sports.io/football/teams/126.png" },
    { year:2009, season:"2009", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:2008, season:"2008", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2007, season:"2007", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2006, season:"2006", name:"Internacional", logo:"https://media.api-sports.io/football/teams/126.png" },
    { year:2005, season:"2005", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:2004, season:"2004", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2003, season:"2003", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2002, season:"2002", name:"Olimpia", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2001, season:"2001", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2000, season:"2000", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1999, season:"1999", name:"Deportivo Cali", logo:"https://media.api-sports.io/football/teams/1187.png" },
    { year:1998, season:"1998", name:"Vasco da Gama", logo:"https://media.api-sports.io/football/teams/120.png" },
    { year:1997, season:"1997", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:1996, season:"1996", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1995, season:"1995", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:1994, season:"1994", name:"Vélez Sársfield", logo:"https://media.api-sports.io/football/teams/438.png" },
    { year:1993, season:"1993", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:1992, season:"1992", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:1991, season:"1991", name:"Colo-Colo", logo:"https://media.api-sports.io/football/teams/2288.png" },
    { year:1990, season:"1990", name:"Olimpia", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1989, season:"1989", name:"Atlético Nacional", logo:"https://media.api-sports.io/football/teams/1183.png" },
    { year:1988, season:"1988", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:1987, season:"1987", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1986, season:"1986", name:"River Plate", logo:"https://media.api-sports.io/football/teams/442.png" },
    { year:1985, season:"1985", name:"Argentinos Juniors", logo:"https://media.api-sports.io/football/teams/445.png" },
    { year:1984, season:"1984", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1983, season:"1983", name:"Grêmio", logo:"https://media.api-sports.io/football/teams/130.png" },
    { year:1982, season:"1982", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1981, season:"1981", name:"Flamengo", logo:"https://media.api-sports.io/football/teams/127.png" },
    { year:1980, season:"1980", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:1979, season:"1979", name:"Olimpia", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1978, season:"1978", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1977, season:"1977", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:1976, season:"1976", name:"Cruzeiro", logo:"https://media.api-sports.io/football/teams/123.png" },
    { year:1975, season:"1975", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1974, season:"1974", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1973, season:"1973", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1972, season:"1972", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1971, season:"1971", name:"Nacional", logo:"https://media.api-sports.io/football/teams/2283.png" },
    { year:1970, season:"1970", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1969, season:"1969", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1968, season:"1968", name:"Estudiantes", logo:"https://media.api-sports.io/football/teams/433.png" },
    { year:1967, season:"1967", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:1966, season:"1966", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1965, season:"1965", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1964, season:"1964", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:1963, season:"1963", name:"Santos", logo:"https://media.api-sports.io/football/teams/122.png" },
    { year:1962, season:"1962", name:"Santos", logo:"https://media.api-sports.io/football/teams/122.png" },
    { year:1961, season:"1961", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
    { year:1960, season:"1960", name:"Peñarol", logo:"https://media.api-sports.io/football/teams/2282.png" },
  ]},
  sula: { label: "Copa Sudamericana", items: [
    { year:2024, season:"2024", name:"Racing Club", logo:"https://media.api-sports.io/football/teams/440.png" },
    { year:2023, season:"2023", name:"LDU Quito", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2022, season:"2022", name:"Independiente del Valle", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2021, season:"2021", name:"Athletico Paranaense", logo:"https://media.api-sports.io/football/teams/119.png" },
    { year:2020, season:"2020", name:"Lanús", logo:"https://media.api-sports.io/football/teams/443.png" },
    { year:2019, season:"2019", name:"Independiente del Valle", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2018, season:"2018", name:"Athletico Paranaense", logo:"https://media.api-sports.io/football/teams/119.png" },
    { year:2017, season:"2017", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:2016, season:"2016", name:"Chapecoense", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2015, season:"2015", name:"Santa Fe", logo:"https://media.api-sports.io/football/teams/1186.png" },
    { year:2014, season:"2014", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
    { year:2013, season:"2013", name:"Lanús", logo:"https://media.api-sports.io/football/teams/443.png" },
    { year:2012, season:"2012", name:"São Paulo", logo:"https://media.api-sports.io/football/teams/118.png" },
    { year:2011, season:"2011", name:"Universidad de Chile", logo:"https://media.api-sports.io/football/teams/2290.png" },
    { year:2010, season:"2010", name:"Independiente", logo:"https://media.api-sports.io/football/teams/436.png" },
    { year:2009, season:"2009", name:"LDU Quito", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2008, season:"2008", name:"Internacional", logo:"https://media.api-sports.io/football/teams/126.png" },
    { year:2007, season:"2007", name:"Arsenal de Sarandí", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2006, season:"2006", name:"Pachuca", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2005, season:"2005", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2004, season:"2004", name:"Boca Juniors", logo:"https://media.api-sports.io/football/teams/435.png" },
    { year:2003, season:"2003", name:"Cienciano", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2002, season:"2002", name:"San Lorenzo", logo:"https://media.api-sports.io/football/teams/444.png" },
  ]},
  ucl: { label: "Champions League", items: [
    { year:2024, season:"2024/25", name:"Paris Saint-Germain", logo:"https://media.api-sports.io/football/teams/85.png" },
    { year:2023, season:"2023/24", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2022, season:"2022/23", name:"Manchester City", logo:"https://media.api-sports.io/football/teams/50.png" },
    { year:2021, season:"2021/22", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2020, season:"2020/21", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2019, season:"2019/20", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2018, season:"2018/19", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2017, season:"2017/18", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2016, season:"2016/17", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2015, season:"2015/16", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2014, season:"2014/15", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2013, season:"2013/14", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2012, season:"2012/13", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:2011, season:"2011/12", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2010, season:"2010/11", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2009, season:"2009/10", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:2008, season:"2008/09", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2007, season:"2007/08", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2006, season:"2006/07", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2005, season:"2005/06", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:2004, season:"2004/05", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2003, season:"2003/04", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2002, season:"2002/03", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:2001, season:"2001/02", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:2000, season:"2000/01", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1999, season:"1999/00", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1998, season:"1998/99", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1997, season:"1997/98", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1996, season:"1996/97", name:"Borussia Dortmund", logo:"https://media.api-sports.io/football/teams/165.png" },
    { year:1995, season:"1995/96", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1994, season:"1994/95", name:"Ajax", logo:"https://media.api-sports.io/football/teams/194.png" },
    { year:1993, season:"1993/94", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1992, season:"1992/93", name:"Marseille", logo:"https://media.api-sports.io/football/teams/81.png" },
    { year:1991, season:"1991/92", name:"Barcelona", logo:"https://media.api-sports.io/football/teams/529.png" },
    { year:1990, season:"1990/91", name:"Red Star Belgrade", logo:"https://media.api-sports.io/football/teams/2672.png" },
    { year:1989, season:"1989/90", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1988, season:"1988/89", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1987, season:"1987/88", name:"PSV Eindhoven", logo:"https://media.api-sports.io/football/teams/199.png" },
    { year:1986, season:"1986/87", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:1985, season:"1985/86", name:"Steaua Bucharest", logo:"https://media.api-sports.io/football/teams/194.png" },
    { year:1984, season:"1984/85", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1983, season:"1983/84", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1982, season:"1982/83", name:"Hamburger SV", logo:"https://media.api-sports.io/football/teams/164.png" },
    { year:1981, season:"1981/82", name:"Aston Villa", logo:"https://media.api-sports.io/football/teams/66.png" },
    { year:1980, season:"1980/81", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1979, season:"1979/80", name:"Nottingham Forest", logo:"https://media.api-sports.io/football/teams/65.png" },
    { year:1978, season:"1978/79", name:"Nottingham Forest", logo:"https://media.api-sports.io/football/teams/65.png" },
    { year:1977, season:"1977/78", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1976, season:"1976/77", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1975, season:"1975/76", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1974, season:"1974/75", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1973, season:"1973/74", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1972, season:"1972/73", name:"Ajax", logo:"https://media.api-sports.io/football/teams/194.png" },
    { year:1971, season:"1971/72", name:"Ajax", logo:"https://media.api-sports.io/football/teams/194.png" },
    { year:1970, season:"1970/71", name:"Ajax", logo:"https://media.api-sports.io/football/teams/194.png" },
    { year:1969, season:"1969/70", name:"Feyenoord", logo:"https://media.api-sports.io/football/teams/193.png" },
    { year:1968, season:"1968/69", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1967, season:"1967/68", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:1966, season:"1966/67", name:"Celtic", logo:"https://media.api-sports.io/football/teams/207.png" },
    { year:1965, season:"1965/66", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1964, season:"1964/65", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1963, season:"1963/64", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1962, season:"1962/63", name:"AC Milan", logo:"https://media.api-sports.io/football/teams/497.png" },
    { year:1961, season:"1961/62", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1960, season:"1960/61", name:"Benfica", logo:"https://media.api-sports.io/football/teams/211.png" },
    { year:1959, season:"1959/60", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1958, season:"1958/59", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1957, season:"1957/58", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1956, season:"1956/57", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1955, season:"1955/56", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
  ]},
  uel: { label: "Europa League", items: [
    { year:2024, season:"2023/24", name:"Atalanta", logo:"https://media.api-sports.io/football/teams/488.png" },
    { year:2023, season:"2022/23", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2022, season:"2021/22", name:"Eintracht Frankfurt", logo:"https://media.api-sports.io/football/teams/169.png" },
    { year:2021, season:"2020/21", name:"Villarreal", logo:"https://media.api-sports.io/football/teams/533.png" },
    { year:2020, season:"2019/20", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2019, season:"2018/19", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2018, season:"2017/18", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:2017, season:"2016/17", name:"Manchester United", logo:"https://media.api-sports.io/football/teams/33.png" },
    { year:2016, season:"2015/16", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2015, season:"2014/15", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2014, season:"2013/14", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2013, season:"2012/13", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2012, season:"2011/12", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:2011, season:"2010/11", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2010, season:"2009/10", name:"Atletico Madrid", logo:"https://media.api-sports.io/football/teams/530.png" },
    { year:2009, season:"2008/09", name:"Shakhtar Donetsk", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2008, season:"2007/08", name:"Zenit", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2007, season:"2006/07", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2006, season:"2005/06", name:"Sevilla", logo:"https://media.api-sports.io/football/teams/548.png" },
    { year:2005, season:"2004/05", name:"CSKA Moscow", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:2004, season:"2003/04", name:"Valencia", logo:"https://media.api-sports.io/football/teams/532.png" },
    { year:2003, season:"2002/03", name:"FC Porto", logo:"https://media.api-sports.io/football/teams/212.png" },
    { year:2002, season:"2001/02", name:"Feyenoord", logo:"https://media.api-sports.io/football/teams/193.png" },
    { year:2001, season:"2000/01", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:2000, season:"1999/00", name:"Galatasaray", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1999, season:"1998/99", name:"Parma", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1998, season:"1997/98", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1997, season:"1996/97", name:"Schalke 04", logo:"https://media.api-sports.io/football/teams/166.png" },
    { year:1996, season:"1995/96", name:"Bayern Munich", logo:"https://media.api-sports.io/football/teams/157.png" },
    { year:1995, season:"1994/95", name:"Parma", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1994, season:"1993/94", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1993, season:"1992/93", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1992, season:"1991/92", name:"Ajax", logo:"https://media.api-sports.io/football/teams/194.png" },
    { year:1991, season:"1990/91", name:"Inter", logo:"https://media.api-sports.io/football/teams/489.png" },
    { year:1990, season:"1989/90", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1989, season:"1988/89", name:"Napoli", logo:"https://media.api-sports.io/football/teams/492.png" },
    { year:1988, season:"1987/88", name:"Bayer Leverkusen", logo:"https://media.api-sports.io/football/teams/168.png" },
    { year:1987, season:"1986/87", name:"IFK Göteborg", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1986, season:"1985/86", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1985, season:"1984/85", name:"Real Madrid", logo:"https://media.api-sports.io/football/teams/541.png" },
    { year:1984, season:"1983/84", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
    { year:1983, season:"1982/83", name:"Anderlecht", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1982, season:"1981/82", name:"IFK Göteborg", logo:"https://media.api-sports.io/football/teams/0.png" },
    { year:1981, season:"1980/81", name:"Ipswich Town", logo:"https://media.api-sports.io/football/teams/57.png" },
    { year:1980, season:"1979/80", name:"Eintracht Frankfurt", logo:"https://media.api-sports.io/football/teams/169.png" },
    { year:1979, season:"1978/79", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1978, season:"1977/78", name:"PSV Eindhoven", logo:"https://media.api-sports.io/football/teams/199.png" },
    { year:1977, season:"1976/77", name:"Juventus", logo:"https://media.api-sports.io/football/teams/496.png" },
    { year:1976, season:"1975/76", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1975, season:"1974/75", name:"Borussia Mönchengladbach", logo:"https://media.api-sports.io/football/teams/163.png" },
    { year:1974, season:"1973/74", name:"Feyenoord", logo:"https://media.api-sports.io/football/teams/193.png" },
    { year:1973, season:"1972/73", name:"Liverpool", logo:"https://media.api-sports.io/football/teams/40.png" },
    { year:1972, season:"1971/72", name:"Tottenham", logo:"https://media.api-sports.io/football/teams/47.png" },
  ]},
  uecl: { label: "Conference League", items: [
    { year:2024, season:"2023/24", name:"Chelsea", logo:"https://media.api-sports.io/football/teams/49.png" },
    { year:2023, season:"2022/23", name:"West Ham", logo:"https://media.api-sports.io/football/teams/48.png" },
    { year:2022, season:"2021/22", name:"Roma", logo:"https://media.api-sports.io/football/teams/487.png" },
  ]},
  per_liga: { label: "Liga 1 Perú",           items: [] },
  ecu_liga: { label: "Liga Pro Ecuador",       items: [] },
  par_liga: { label: "División Profesional",   items: [] },
  mex_liga: { label: "Liga MX",                items: [] },
  usa_liga: { label: "MLS",                    items: [] },
  ned_liga: { label: "Eredivisie",             items: [] },
  sau_liga: { label: "Saudi Pro League",       items: [] },
};

// ── Country/competition mapping ────────────────────────────────────
const CHAMP_COUNTRIES = [
  { id:"arg",  name:"Argentina",   flag:"https://flagcdn.com/w40/ar.png",
    comps:[ {label:"Liga",key:"arg_liga"}, {label:"Copa Argentina",key:"arg_copa"} ] },
  { id:"bra",  name:"Brasil",      flag:"https://flagcdn.com/w40/br.png",
    comps:[ {label:"Liga",key:"bra_liga"}, {label:"Copa de Brasil",key:"bra_copa"} ] },
  { id:"uru",  name:"Uruguay",     flag:"https://flagcdn.com/w40/uy.png",
    comps:[ {label:"Liga",key:"uru_liga"} ] },
  { id:"chi",  name:"Chile",       flag:"https://flagcdn.com/w40/cl.png",
    comps:[ {label:"Liga",key:"chi_liga"} ] },
  { id:"col",  name:"Colombia",    flag:"https://flagcdn.com/w40/co.png",
    comps:[ {label:"Liga",key:"col_liga"} ] },
  { id:"per",  name:"Perú",        flag:"https://flagcdn.com/w40/pe.png",
    comps:[ {label:"Liga 1",key:"per_liga"} ] },
  { id:"ecu",  name:"Ecuador",     flag:"https://flagcdn.com/w40/ec.png",
    comps:[ {label:"Liga Pro",key:"ecu_liga"} ] },
  { id:"par",  name:"Paraguay",    flag:"https://flagcdn.com/w40/py.png",
    comps:[ {label:"División Prof.",key:"par_liga"} ] },
  { id:"mex",  name:"México",      flag:"https://flagcdn.com/w40/mx.png",
    comps:[ {label:"Liga MX",key:"mex_liga"} ] },
  { id:"usa",  name:"EEUU",        flag:"https://flagcdn.com/w40/us.png",
    comps:[ {label:"MLS",key:"usa_liga"} ] },
  { id:"esp",  name:"España",      flag:"https://flagcdn.com/w40/es.png",
    comps:[ {label:"LaLiga",key:"esp_liga"}, {label:"Copa del Rey",key:"esp_copa"}, {label:"Supercopa",key:"esp_super"} ] },
  { id:"eng",  name:"Inglaterra",  flag:"https://flagcdn.com/w40/gb-eng.png",
    comps:[ {label:"Premier League",key:"eng_liga"}, {label:"FA Cup",key:"eng_copa"}, {label:"League Cup",key:"eng_carabao"} ] },
  { id:"ita",  name:"Italia",      flag:"https://flagcdn.com/w40/it.png",
    comps:[ {label:"Serie A",key:"ita_liga"}, {label:"Coppa Italia",key:"ita_copa"} ] },
  { id:"ger",  name:"Alemania",    flag:"https://flagcdn.com/w40/de.png",
    comps:[ {label:"Bundesliga",key:"ger_liga"}, {label:"DFB Pokal",key:"ger_copa"} ] },
  { id:"fra",  name:"Francia",     flag:"https://flagcdn.com/w40/fr.png",
    comps:[ {label:"Ligue 1",key:"fra_liga"}, {label:"Coupe de France",key:"fra_copa"} ] },
  { id:"por",  name:"Portugal",    flag:"https://flagcdn.com/w40/pt.png",
    comps:[ {label:"Liga Portugal",key:"por_liga"} ] },
  { id:"ned",  name:"Holanda",      flag:"https://flagcdn.com/w40/nl.png",
    comps:[ {label:"Eredivisie",key:"ned_liga"} ] },
  { id:"sau",  name:"Arabia Saudita",flag:"https://flagcdn.com/w40/sa.png",
    comps:[ {label:"Saudi Pro League",key:"sau_liga"} ] },
  { id:"ucl",  name:"Champions",   logo:"https://media.api-sports.io/football/leagues/2.png",
    comps:[ {label:"Champions League",key:"ucl"} ] },
  { id:"uel",  name:"Europa Lg",   logo:"https://media.api-sports.io/football/leagues/3.png",
    comps:[ {label:"Europa League",key:"uel"} ] },
  { id:"uecl", name:"Conference",  logo:"https://media.api-sports.io/football/leagues/848.png",
    comps:[ {label:"Conference League",key:"uecl"} ] },
  { id:"lib",  name:"Libertadores",logo:"https://media.api-sports.io/football/leagues/13.png",
    comps:[ {label:"Copa Libertadores",key:"lib"} ] },
  { id:"sula", name:"Sudamericana",logo:"https://media.api-sports.io/football/leagues/11.png",
    comps:[ {label:"Copa Sudamericana",key:"sula"} ] },
];

let activeChampCountry = localStorage.getItem("dopartis-league-campeones") || "esp";
let activeChampKey     = "esp_liga";

function buildChampTabs() {
  const containerId = "champ-country-tabs";
  const wrap = document.getElementById(containerId);
  wrap.innerHTML = "";
  wrap.className = "league-selector";

  const activeC = CHAMP_COUNTRIES.find(c => c.id === activeChampCountry) || CHAMP_COUNTRIES[0];
  const iconSrcActive = activeC.logo || activeC.flag;

  const toggle = document.createElement("div");
  toggle.className = "league-selector-toggle";
  toggle.innerHTML = `<span>Ver:</span><span class="sel-active-label" id="${containerId}-label">${iconSrcActive?`<img src="${iconSrcActive}" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;border-radius:2px;"> `:""} ${activeC.name}</span><span class="sel-arrow">▼</span>`;

  const panel = document.createElement("div");
  panel.className = "league-selector-panel";

  const CHAMP_GROUPS = [
    { continent:"América", paises:["arg","bra","uru","chi","col","per","ecu","par","mex","usa"], comps:["lib","sula"] },
    { continent:"Europa",  paises:["esp","eng","ita","ger","fra","por","ned"], comps:["ucl","uel","uecl"] },
    { continent:"Asia / Medio Oriente", paises:["sau"], comps:[] },
  ];

  CHAMP_GROUPS.forEach(group => {
    const paisList = group.paises.map(id => CHAMP_COUNTRIES.find(c => c.id === id)).filter(Boolean);
    const compList = group.comps.map(id => CHAMP_COUNTRIES.find(c => c.id === id)).filter(Boolean);
    if (!paisList.length && !compList.length) return;

    const section = document.createElement("div");
    section.className = "lsel-continent";
    section.innerHTML = `<div class="lsel-continent-title">${group.continent}</div>`;

    function addBtns(items, parentEl) {
      const row = document.createElement("div");
      row.className = "lsel-group";
      items.forEach(c => {
        const btn = document.createElement("button");
        btn.className = "ltab" + (c.id === activeChampCountry ? " active" : "");
        btn.dataset.id = c.id;
        const iconSrc = c.logo || c.flag;
        const iconEl = iconSrc ? `<img src="${iconSrc}" style="width:18px;height:18px;object-fit:contain;border-radius:2px;flex-shrink:0;" onerror="this.style.display='none'">` : "";
        btn.innerHTML = `${iconEl}<span>${c.name}</span>`;
        btn.onclick = () => {
          panel.querySelectorAll(".ltab").forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          document.getElementById(`${containerId}-label`).innerHTML = (iconSrc?`<img src="${iconSrc}" style="width:16px;height:16px;object-fit:contain;vertical-align:middle;border-radius:2px;"> `:"") + c.name;
          panel.classList.remove("open"); toggle.classList.remove("open");
          activeChampCountry = c.id;
          localStorage.setItem("dopartis-league-campeones", c.id);
          loadChampionsForCountry(c);
        };
        row.appendChild(btn);
      });
      parentEl.appendChild(row);
    }

    if (paisList.length) addBtns(paisList, section);
    if (compList.length) {
      const sublabel = document.createElement("div");
      sublabel.className = "lsel-sublabel";
      sublabel.textContent = "Competencias";
      section.appendChild(sublabel);
      addBtns(compList, section);
    }
    panel.appendChild(section);
  });

  toggle.onclick = e => { e.stopPropagation(); panel.classList.toggle("open"); toggle.classList.toggle("open"); };
  document.addEventListener("click", () => { panel.classList.remove("open"); toggle.classList.remove("open"); });

  wrap.appendChild(toggle);
  wrap.appendChild(panel);
}

function buildCompetitionTabs(country) {
  const wrap = document.getElementById("champ-comp-tabs");
  if (country.comps.length <= 1) { wrap.style.display = "none"; wrap.innerHTML = ""; return; }
  wrap.style.display = "flex";
  wrap.innerHTML = country.comps.map((comp, i) =>
    `<button class="arg-tab${i===0?" active":""}" onclick="switchChampComp('${comp.key}',this)">${comp.label}</button>`
  ).join("");
}

function switchChampComp(key, btn) {
  document.querySelectorAll("#champ-comp-tabs .arg-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeChampKey = key;
  renderChampions(key);
}

function loadChampionsForCountry(country) {
  buildCompetitionTabs(country);
  activeChampKey = country.comps[0].key;
  renderChampions(activeChampKey);
}

// Cache: teamName → logoUrl (fetched from API)
const logoCache = {};

async function resolveLogos(names) {
  // Only fetch logos for names not yet cached
  const unknown = [...new Set(names)].filter(n => logoCache[n] === undefined);
  for (const name of unknown) {
    logoCache[name] = null; // mark as pending to avoid duplicate fetches
    try {
      const data = await apiFetch(`/api/search?q=${encodeURIComponent(name)}`);
      const match = (data?.response ?? []).find(t =>
        t.team?.name?.toLowerCase() === name.toLowerCase()
      ) ?? data?.response?.[0];
      logoCache[name] = match?.team?.logo ?? null;
    } catch(_) {
      logoCache[name] = null;
    }
    await new Promise(r => setTimeout(r, 150)); // respect rate limit
  }
}

function logoImg(name, size) {
  const url = logoCache[name];
  return url
    ? `<img src="${url}" style="width:${size}px;height:${size}px;object-fit:contain;" onerror="this.style.display='none'">`
    : `<span style="font-size:${size-8}px;">⚽</span>`;
}

function renderChampionsHTML(items) {
  const listHTML = items.map(s => {
    const logoUrl  = logoCache[s.name] ?? s.logo ?? null;
    const safeLogoUrl = logoUrl ? logoUrl.replace(/'/g, "\\'") : "";
    const safeName = s.name.replace(/'/g, "\\'");
    const safeSeasonLabel = (s.season ?? s.year).toString().replace(/'/g, "\\'");
    return `
    <div class="champ-row" onclick="openChampion('${activeChampKey}','${s.year}','${safeName}','${safeLogoUrl}','${safeSeasonLabel}')" style="cursor:pointer;">
      <div class="champ-year" style="flex:0 0 90px;text-align:left;">${s.season ?? s.year}</div>
      <div class="champ-logo">${logoImg(s.name, 34)}</div>
      <div class="champ-name">${s.name}</div>
    </div>`;
  }).join("");

  document.getElementById("champ-list").innerHTML = `
    <div class="champ-list-wrap">
      <div class="champ-list-header">
        <span style="flex:0 0 90px;">Año</span>
        <span style="flex:0 0 46px;"></span>
        <span style="flex:1;">Club</span>
      </div>
      ${listHTML}
    </div>`;

  const titleMap = {};
  items.forEach(s => {
    if (!titleMap[s.name]) titleMap[s.name] = { name: s.name, count: 0 };
    titleMap[s.name].count++;
  });
  const ranked = Object.values(titleMap).sort((a,b) => b.count - a.count || a.name.localeCompare(b.name));

  document.getElementById("champ-ranking").innerHTML = `
    <div class="champ-rank-wrap">
      <div class="champ-rank-title">🏆 Títulos</div>
      ${ranked.map((t,i) => `<div class="rank-row">
        <span class="rank-pos">${i+1}</span>
        <span class="rank-logo">${logoImg(t.name, 26)}</span>
        <span class="rank-name">${t.name}</span>
        <span class="rank-count">${t.count}</span>
      </div>`).join("")}
    </div>`;
}

async function renderChampions(key) {
  const items = CHAMP_DATA[key]?.items ?? [];
  if (!items.length) {
    document.getElementById("champ-list").innerHTML =
      `<div class="empty-state"><div class="big">🏆</div><p>Sin datos para esta competencia.</p></div>`;
    document.getElementById("champ-ranking").innerHTML = "";
    return;
  }

  // Render immediately with cached logos (or placeholders)
  renderChampionsHTML(items);

  // Fetch missing logos in background, then re-render
  const names = items.map(s => s.name);
  const hadUnknown = [...new Set(names)].some(n => logoCache[n] === undefined);
  if (hadUnknown) {
    await resolveLogos(names);
    renderChampionsHTML(items); // re-render with correct logos
  }
}

function refreshCurrentView() { renderChampions(activeChampKey); }

document.addEventListener("DOMContentLoaded", () => {
  buildChampTabs();
  const def = CHAMP_COUNTRIES.find(c => c.id === activeChampCountry);
  if (def) loadChampionsForCountry(def);
});
// ═══════════════════════════════════════════════════════════════════
// MODAL DE CAMPEÓN
// ═══════════════════════════════════════════════════════════════════

// Competitions that have two phases: group stage + knockout bracket
// These will show tabs in the modal
const TWO_PHASE_COMPS = new Set(["ucl","uel","uecl","lib","sula"]);

// Map comp key → league id + whether it has group stage
const COMP_LID_MAP = {
  ucl:  { lid:2,   hasGroups:true  },
  uel:  { lid:3,   hasGroups:true  },
  uecl: { lid:848, hasGroups:true  },
  lib:  { lid:13,  hasGroups:true  },
  sula: { lid:11,  hasGroups:true  },
  // League comps (no groups, just standings)
  arg_liga:   { lid:128, hasGroups:false },
  arg_copa:   { lid:131, hasGroups:false },
  esp_liga:   { lid:140, hasGroups:false },
  esp_copa:   { lid:143, hasGroups:false },
  esp_super:  { lid:null,hasGroups:false },
  eng_liga:   { lid:39,  hasGroups:false },
  eng_copa:   { lid:45,  hasGroups:false },
  eng_carabao:{ lid:48,  hasGroups:false },
  ita_liga:   { lid:135, hasGroups:false },
  ita_copa:   { lid:137, hasGroups:false },
  ger_liga:   { lid:78,  hasGroups:false },
  ger_copa:   { lid:81,  hasGroups:false },
  fra_liga:   { lid:61,  hasGroups:false },
  fra_copa:   { lid:66,  hasGroups:false },
  por_liga:   { lid:94,  hasGroups:false },
  bra_liga:   { lid:71,  hasGroups:false },
  bra_copa:   { lid:73,  hasGroups:false },
  uru_liga:   { lid:268, hasGroups:false },
  chi_liga:   { lid:265, hasGroups:false },
  col_liga:   { lid:239, hasGroups:false },
};

let _champModalTab = "tabla"; // "tabla" | "eliminacion"
let _champModalLid = null;
let _champModalSeason = null;
let _champModalCompKey = null;

function slugifyChamp(str) {
  return (str ?? "").toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function openChampion(compKey, season, teamName, teamLogo, seasonLabel) {
  _champModalCompKey = compKey;
  _champModalSeason  = season;
  _champModalTab     = TWO_PHASE_COMPS.has(compKey) ? "tabla" : "tabla";

  const info = COMP_LID_MAP[compKey];
  _champModalLid = info?.lid ?? null;

  document.getElementById("champ-modal").classList.add("open");
  document.body.style.overflow = "hidden";

  const slug = slugifyChamp(`${seasonLabel}-${teamName}`);
  history.pushState({ compKey, season, slug }, "", `/campeon/${slug}?comp=${compKey}&season=${season}`);

  _loadChampModal(compKey, season, teamName, teamLogo, seasonLabel);
}

function closeChampModal() {
  document.getElementById("champ-modal").classList.remove("open");
  document.body.style.overflow = "";
  history.pushState({}, "", "/campeones.html");
}

function closeChampModalOnOverlay(e) {
  if (e.target === document.getElementById("champ-modal")) closeChampModal();
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && document.getElementById("champ-modal")?.classList.contains("open")) closeChampModal();
});

window.addEventListener("popstate", e => {
  if (e.state?.compKey) {
    // Re-open if navigating forward
  } else {
    const modal = document.getElementById("champ-modal");
    if (modal?.classList.contains("open")) {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    }
  }
});

// Auto-open on direct URL
(function checkDirectChampURL() {
  if (!window.location.pathname.startsWith("/campeon/")) return;
  const params = new URLSearchParams(window.location.search);
  const compKey = params.get("comp");
  const season  = params.get("season");
  if (!compKey || !season) return;
  // Find the item in CHAMP_DATA
  const items = CHAMP_DATA[compKey]?.items ?? [];
  const item  = items.find(i => String(i.year) === season || i.season === season);
  if (!item) return;
  const compLabel = CHAMP_DATA[compKey]?.label ?? compKey;
  window.addEventListener("DOMContentLoaded", () =>
    openChampion(compKey, season, item.name, item.logo, item.season ?? item.year)
  );
})();

async function _loadChampModal(compKey, season, teamName, teamLogo, seasonLabel) {
  const box = document.getElementById("champ-modal-content");
  const info  = COMP_LID_MAP[compKey];
  const lid   = info?.lid ?? null;
  const hasTwoPhases = TWO_PHASE_COMPS.has(compKey);
  const compLabel = CHAMP_DATA[compKey]?.label ?? compKey;

  // Header
  const headerHTML = `
    <div class="modal-header" style="position:relative;">
      <div style="grid-column:1/-1;display:flex;flex-direction:column;align-items:center;gap:8px;padding:4px 0 10px;">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;justify-content:center;">
          ${teamLogo ? `<img src="${teamLogo}" style="width:56px;height:56px;object-fit:contain;" onerror="this.style.display='none'">` : ""}
          <div>
            <div style="font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:28px;letter-spacing:1px;">${teamName}</div>
            <div style="font-size:14px;color:var(--accent2);font-weight:700;margin-top:2px;">${compLabel} · ${seasonLabel}</div>
          </div>
        </div>
      </div>
      <button class="modal-close" onclick="closeChampModal()">✕</button>
    </div>`;

  // Tabs — only for two-phase competitions
  const tabsHTML = hasTwoPhases ? `
    <div class="modal-tabs" id="champ-modal-tabs">
      <button class="modal-tab ${_champModalTab==='tabla'?'active':''}" onclick="switchChampModalTab('tabla',${lid},'${season}')">Fase de Grupos</button>
      <button class="modal-tab ${_champModalTab==='eliminacion'?'active':''}" onclick="switchChampModalTab('eliminacion',${lid},'${season}')">Eliminación</button>
    </div>` : "";

  box.innerHTML = headerHTML + tabsHTML + `<div class="modal-body" id="champ-modal-body">
    <div class="modal-loader"><div class="spinner"></div><span>Cargando datos...</span></div>
  </div>`;

  // Load initial content
  await _renderChampModalTab(_champModalTab, lid, season);
}

function switchChampModalTab(tab, lid, season) {
  _champModalTab = tab;
  document.querySelectorAll("#champ-modal-tabs .modal-tab").forEach(b => {
    b.classList.toggle("active", b.textContent.trim().toLowerCase().includes(tab === "tabla" ? "grupo" : "elim"));
  });
  const body = document.getElementById("champ-modal-body");
  body.innerHTML = `<div class="modal-loader"><div class="spinner"></div><span>Cargando...</span></div>`;
  _renderChampModalTab(tab, lid, season);
}

// ── Manual bracket fallback structure (editable for old seasons) ──────────
// CHAMP_BRACKETS[compKey+season] = { rounds: [ { name, matches: [{home,away,scoreHome,scoreAway}] } ] }
const CHAMP_BRACKETS = {};

// ── Manual standings fallback (editable for old seasons) ──────────────────
// CHAMP_STANDINGS[compKey+season] = [ { pos, name, logo, pj, pg, pe, pp, gf, gc, pts, desc } ]
const CHAMP_STANDINGS = {};

function _manualBracketHTML(data) {
  if (!data?.rounds?.length) return `<div class="modal-error" style="padding:24px;">Sin datos de bracket. Completar manualmente en <code>CHAMP_BRACKETS</code>.</div>`;
  return `<div style="display:flex;flex-direction:column;gap:16px;padding:4px 0;">` +
    data.rounds.map(round => `
      <div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--accent2);padding:6px 0 8px;border-bottom:1px solid var(--border);margin-bottom:8px;">${round.name}</div>
        <div style="display:flex;flex-direction:column;gap:6px;">
          ${(round.matches ?? []).map(m => {
            const hWin = m.scoreHome !== null && m.scoreAway !== null && m.scoreHome > m.scoreAway;
            const aWin = m.scoreHome !== null && m.scoreAway !== null && m.scoreAway > m.scoreHome;
            return `<div style="background:var(--bg3);border:1px solid var(--border);border-radius:8px;overflow:hidden;display:flex;align-items:stretch;">
              <div style="flex:1;display:flex;align-items:center;gap:8px;padding:10px 12px;${hWin?'font-weight:700;color:var(--accent)':''}">
                <span style="font-size:15px;">${m.home ?? '—'}</span>
              </div>
              <div style="display:flex;align-items:center;justify-content:center;padding:0 14px;font-family:'Barlow Condensed',sans-serif;font-weight:900;font-size:22px;border-left:1px solid var(--border);border-right:1px solid var(--border);flex-shrink:0;min-width:64px;">
                ${(m.scoreHome !== null && m.scoreAway !== null) ? `${m.scoreHome} - ${m.scoreAway}` : 'vs'}
              </div>
              <div style="flex:1;display:flex;align-items:center;gap:8px;padding:10px 12px;justify-content:flex-end;${aWin?'font-weight:700;color:var(--accent)':''}">
                <span style="font-size:15px;">${m.away ?? '—'}</span>
              </div>
            </div>`;
          }).join("")}
        </div>
      </div>`
    ).join("") + `</div>`;
}

function _manualStandingsHTML(rows) {
  if (!rows?.length) return `<div class="modal-error" style="padding:24px;">Sin datos. Completar manualmente en <code>CHAMP_STANDINGS</code>.</div>`;
  return `<div style="overflow-x:auto;">
    <table class="standings-full" style="min-width:560px;">
      <thead><tr>
        <th style="width:36px;text-align:left;">#</th>
        <th style="text-align:left;">Equipo</th>
        <th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>PTS</th>
      </tr></thead>
      <tbody>
        ${rows.map(r => {
          const dif  = r.dif ?? ((r.gf ?? 0) - (r.gc ?? 0));
          const logoEl = r.logo ? `<img src="${r.logo}" style="width:22px;height:22px;object-fit:contain;" onerror="this.style.display='none'">` : "";
          const barClass = (typeof classifyPosition === "function") ? classifyPosition((r.desc ?? "").toLowerCase()).cls : "pos-none";
          return `<tr>
            <td><div style="display:flex;align-items:center;">
              <span class="pos-bar ${barClass}"></span>
              <span style="color:var(--light);font-size:17px;font-weight:800;">${r.pos ?? ""}</span>
            </div></td>
            <td><div style="display:flex;align-items:center;gap:7px;">${logoEl}<span style="font-size:15px;font-weight:600;">${r.name}</span></div></td>
            <td>${r.pj ?? 0}</td><td>${r.pg ?? 0}</td><td>${r.pe ?? 0}</td><td>${r.pp ?? 0}</td>
            <td>${r.gf ?? 0}</td><td>${r.gc ?? 0}</td>
            <td>${dif > 0 ? "+" : ""}${dif}</td>
            <td style="color:var(--accent);font-weight:900;font-size:18px;">${r.pts ?? 0}</td>
          </tr>`;
        }).join("")}
      </tbody>
    </table>
  </div>`;
}

async function _renderChampModalTab(tab, lid, season) {
  const body = document.getElementById("champ-modal-body");
  const cacheKey = `${_champModalCompKey}${season}`;

  if (tab === "eliminacion") {
    // Check manual fallback first
    const manualBracket = CHAMP_BRACKETS[cacheKey];
    if (manualBracket) { body.innerHTML = _manualBracketHTML(manualBracket); return; }

    if (!lid) { body.innerHTML = _manualBracketHTML(null); return; }

    try {
      // renderCupBracket is defined in tablas.js (loaded before this script)
      if (typeof renderCupBracket === "function") {
        await renderCupBracket(lid, season, body);
      } else {
        body.innerHTML = _manualBracketHTML(null);
      }
    } catch(e) {
      body.innerHTML = _manualBracketHTML(null);
    }
    return;
  }

  // tabla / group stage standings
  // Check manual fallback first
  const manualRows = CHAMP_STANDINGS[cacheKey];
  if (manualRows) { body.innerHTML = _manualStandingsHTML(manualRows); return; }

  if (!lid) { body.innerHTML = _manualStandingsHTML(null); return; }

  try {
    const data = await apiFetch(`/api/standings?leagueid=${lid}&season=${season}`);
    const groups = data?.response?.[0]?.league?.standings ?? [];
    if (!groups.length) {
      body.innerHTML = _manualStandingsHTML(null);
      return;
    }
    const isMulti = groups.length > 1;
    body.innerHTML = `<div style="overflow-x:auto;">` +
      groups.map(group => {
        const groupName = isMulti ? (group[0]?.group ?? "") : "";
        return `
          ${groupName ? `<div style="padding:7px 12px;background:var(--bg3);border-bottom:1px solid var(--border);font-family:'Barlow Condensed',sans-serif;font-weight:800;font-size:13px;letter-spacing:1px;text-transform:uppercase;color:var(--light);">${groupName}</div>` : ""}
          <table class="standings-full" style="min-width:560px;">
            <thead><tr>
              <th style="width:36px;text-align:left;">#</th>
              <th style="text-align:left;">Equipo</th>
              <th>PJ</th><th>G</th><th>E</th><th>P</th><th>GF</th><th>GC</th><th>DG</th><th>PTS</th>
            </tr></thead>
            <tbody>
              ${group.map((r, i) => {
                const pos  = r.rank ?? i+1;
                const name = r.team?.name ?? "";
                const logo = r.team?.logo ?? null;
                const pj   = r.all?.played ?? 0;
                const gd   = r.all?.win    ?? 0;
                const ge   = r.all?.draw   ?? 0;
                const gp   = r.all?.lose   ?? 0;
                const gf   = r.all?.goals?.for      ?? 0;
                const gc   = r.all?.goals?.against  ?? 0;
                const dif  = r.goalsDiff ?? (gf - gc);
                const pts  = r.points ?? 0;
                const desc = (r.description ?? "").toLowerCase();
                const barClass = (typeof classifyPosition === "function") ? classifyPosition(desc).cls : "pos-none";
                const logoEl = logo ? `<img src="${logo}" style="width:22px;height:22px;object-fit:contain;" onerror="this.style.display='none'">` : "";
                return `<tr>
                  <td><div style="display:flex;align-items:center;">
                    <span class="pos-bar ${barClass}"></span>
                    <span style="color:var(--light);font-size:17px;font-weight:800;">${pos}</span>
                  </div></td>
                  <td><div style="display:flex;align-items:center;gap:7px;">${logoEl}<span style="font-size:15px;font-weight:600;">${name}</span></div></td>
                  <td>${pj}</td><td>${gd}</td><td>${ge}</td><td>${gp}</td>
                  <td>${gf}</td><td>${gc}</td><td>${dif>0?"+":""}${dif}</td>
                  <td style="color:var(--accent);font-weight:900;font-size:18px;">${pts}</td>
                </tr>`;
              }).join("")}
            </tbody>
          </table>
          ${_buildLegend(group)}`;
      }).join("") + `</div>`;
  } catch(e) {
    if (body) body.innerHTML = _manualStandingsHTML(null);
  }
}

function _buildLegend(rows) {
  if (typeof classifyPosition !== "function") return "";
  const colorMap = { "pos-cl":"#29b6f6","pos-uel":"#ff9100","pos-uecl":"#ab47bc","pos-rep-lib":"#ab47bc","pos-rep-sul":"#ec407a","pos-rel":"var(--live)" };
  const legendMap = {};
  rows.forEach(r => {
    const desc = (r.description ?? "").toLowerCase();
    const { cls, label } = classifyPosition(desc);
    if (cls !== "pos-none" && !legendMap[cls]) legendMap[cls] = label;
  });
  if (!Object.keys(legendMap).length) return "";
  return `<div class="standings-legend">${Object.entries(legendMap).map(([cls, lbl]) =>
    `<div class="legend-item"><div class="legend-dot" style="background:${colorMap[cls] ?? '#888'};"></div><span>${lbl}</span></div>`
  ).join("")}</div>`;
}