# Pasa las pantallas de la maqueta de Clocc (clocc-app-movil.html) al sitio.
#
# Uso: python3 scripts/maqueta-clocc.py <maqueta.html> <pies.json>
#
# Solo saca las pantallas elegidas: el sitio es público y es presentación, no
# el catálogo completo de la app. Escribe dos módulos en lib/maquetas:
# clocc-portada.ts (las tres de la portada y la lista de la galería, que van en
# el JS de la página) y clocc-galeria.ts (las de la galería, que se piden aparte
# cuando la galería se acerca a la pantalla). El segundo argumento deja el
# título y el pie de cada pantalla, para copiarlos al bloque <i18n> de
# components/mockup/clocc/CloccAppMovil.vue.
import json, os, re, sys
src, caps = sys.argv[1], sys.argv[2]
dest = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'lib', 'maquetas')
PORTADA = ['t2', 't3', 't4']
GALERIA = ['t8', 't12', 't15', 't7', 'r1', 'r2']
html = open(src).read()
figs = re.findall(r'<!-- (T|R)(\d+) · ([^>]*?) -->\s*<figure class="pantalla"><div class="telefono"><div class="vista( camara)?">(.*?)</div></div>\s*<figcaption class="pie"><h3>(.*?)</h3><p>(.*?)</p></figcaption></figure>', html, re.S)
barra = re.compile(r'\s*<div class="isla"></div><div class="barra-estado">.*?</svg></span></div>', re.S)
items, captions = [], []
cuenta = {'t': 0, 'r': 0}
for rol, n, coment, camara, cuerpo, h3, p in figs:
    cuerpo, k = barra.subn('', cuerpo, count=1)
    assert k == 1, (rol, n)
    cuerpo = re.sub(r'<!--.*?-->', '', cuerpo, flags=re.S)
    ids = set(re.findall(r'\bid="([^"]+)"', cuerpo))
    for i in ids:
        cuerpo = cuerpo.replace(f'id="{i}"', f'id="{i}__U__"').replace(f'url(#{i})', f'url(#{i}__U__)').replace(f'href="#{i}"', f'href="#{i}__U__"')
    cuerpo = re.sub(r'\s*\n\s*', ' ', cuerpo).strip()
    # Los iconos salen del sprite estático (public/img/iconos/clocc.svg), en caché.
    cuerpo = re.sub(r'href="#((?:solar|lucide)-[^"]+)"', r'href="/img/iconos/clocc.svg#\1"', cuerpo)
    cuenta[rol.lower()] += 1
    pid = f'{rol.lower()}{cuenta[rol.lower()]}'
    items.append({'id': pid, 'rol': rol.lower(), 'camara': bool(camara), 'html': cuerpo})
    captions.append({'id': pid, 'titulo': h3, 'texto': p, 'coment': coment})
def escribir(f, nombre, lista):
    f.write(f'export const {nombre}: PantallaClocc[] = [\n')
    for it in lista:
        f.write('  {\n')
        f.write(f'    id: {json.dumps(it["id"])},\n    rol: {json.dumps(it["rol"])},\n    camara: {"true" if it["camara"] else "false"},\n')
        f.write(f'    html: {json.dumps(it["html"], ensure_ascii=False)},\n')
        f.write('  },\n')
    f.write('];\n')

cabecera = (
    '// Pantallas de la app móvil de Clocc, tal como vienen en la maqueta\n'
    '// (clocc-app-movil.html). Generado con scripts/maqueta-clocc.py: no se edita a\n'
    '// mano. Cada pantalla es el contenido de la vista sin la barra de estado (la\n'
    '// pone PhoneMock); "__U__" se cambia por un sufijo único para que los id del\n'
    '// SVG no choquen cuando la misma pantalla sale dos veces.\n\n'
)
with open(os.path.join(dest, 'clocc-portada.ts'), 'w') as f:
    f.write(cabecera)
    f.write('// Aquí va lo que la página necesita de entrada: las tres de la portada y qué\n')
    f.write('// pantallas lleva la galería. Las de la galería están en clocc-galeria.ts.\n\n')
    f.write('export interface PantallaClocc {\n  id: string;\n  rol: "t" | "r";\n  camara: boolean;\n  html: string;\n}\n\n')
    rol = {i['id']: i['rol'] for i in items}
    f.write('export const galeriaClocc: { id: string; rol: "t" | "r" }[] = [\n')
    for g in GALERIA:
        f.write(f'  {{ id: {json.dumps(g)}, rol: {json.dumps(rol[g])} }},\n')
    f.write('];\n\n')
    escribir(f, 'portadaClocc', [i for i in items if i['id'] in PORTADA])
with open(os.path.join(dest, 'clocc-galeria.ts'), 'w') as f:
    f.write(cabecera)
    f.write('import type { PantallaClocc } from "./clocc-portada";\n\n')
    por_id = {i['id']: i for i in items}
    escribir(f, 'pantallasGaleria', [por_id[g] for g in GALERIA])
captions = [c for c in captions if c['id'] in PORTADA + GALERIA]
json.dump(captions, open(caps, 'w'), ensure_ascii=False, indent=1)
print(len(items), sum(len(i['html']) for i in items))
