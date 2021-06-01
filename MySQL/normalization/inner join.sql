SELECT estudiante.nombre, direccion.calle, direccion.numero, comuna.comuna, region.region 
FROM (((estudiante
INNER JOIN direccion ON estudiante.direccion_id = direccion.id)
INNER JOIN comuna ON direccion.comuna_id = comuna.id)
INNER JOIN region ON comuna.region_id = region.id)
WHERE comuna = "Temuco"; 




