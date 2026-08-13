#!/usr/bin/env python
"""Assemble slide-NN.png screenshots into a single landscape PDF (pixel-perfect)."""
import glob, os
from PIL import Image

here = os.path.dirname(os.path.abspath(__file__))
SRC = os.environ.get("SHOTS", "shots")
OUTNAME = os.environ.get("OUTPDF", "allmeta-Ontology-v1.0-发布演讲.pdf")
shots = sorted(glob.glob(os.path.join(here, SRC, "slide-*.png")))
assert shots, "no screenshots found"

TARGET = (1920, 1080)  # 16:9 page raster
pages = []
for p in shots:
    im = Image.open(p).convert("RGB")
    if im.size != TARGET:
        im = im.resize(TARGET, Image.LANCZOS)
    pages.append(im)

out = os.path.join(here, OUTNAME)
pages[0].save(
    out, "PDF", save_all=True, append_images=pages[1:],
    resolution=150.0, quality=92,
)
print(f"PDF written: {out}  ({len(pages)} pages, {os.path.getsize(out)//1024} KB)")
