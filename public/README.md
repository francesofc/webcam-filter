# public/

Files here are served at the site root by Vite (e.g. `public/potato.png` →
`/potato.png`).

## Custom potato

Drop a file named **`potato.png`** in this folder and it will automatically
replace the drawn placeholder potato. No code changes or restart needed in dev
— just reload the page.

Recommendations:

- **Transparent background (PNG).** Anything non-transparent will cover the
  green screen and show as a rectangle. Crop the potato to its outline with
  alpha transparency around it.
- Roughly square-ish framing works best; the image is scaled to fit the
  face-tracked region while preserving its aspect ratio.
- The eye/mouth holes are positioned over the face, so leave the central area
  of the potato clear of important detail.


## Personalized characters

The default `/webcam-filter/` page still loads `public/potato.png`.

For other characters, add the **transparent PNG files** to the following
paths (all artwork has to be uploaded before the matching URL works):

| URL parameter | File |
| --- | --- |
| `?character=jems` | `public/jems.png` |
| `?character=hicham` | `public/hicham.png` |
| `?character=hugo` | `public/hugo.png` |
| `?character=faster` | `public/faster.png` |
| `?character=sobedo` | `public/sobedo.png` |
| `?character=monsieur-patate` | `public/monsieur-patate.png` |

Example: `https://joxtacy.github.io/webcam-filter/?character=hicham`

Unknown names fall back to MisterFrances. Missing named PNGs produce a
visible error and the procedural potato fallback rather than showing
someone else's identity. Each link is **public**, not a secret or
authentication token. Video and facial tracking are processed locally;
these links do **not** transmit webcam video to the live producer.
To bring a character into an OBS show, separately use screen capture
and a streaming transport such as VDO.Ninja.

Keep the center of each PNG clear of eyes, mouth, accessories and text;
the live user's facial features are composited there. Prefer the same
canvas dimensions for all avatars. Existing eye/mouth offset sliders
remain available to adjust each person's facial anatomy.
