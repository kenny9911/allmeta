#!/usr/bin/env python3
"""Combine the 24 rendered slide PNGs (2x) into a single 16:9 PDF deck."""
import glob, os
from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
files = sorted(glob.glob(os.path.join(HERE, "slides", "slide-*.png")))
assert files, "no slide PNGs found — run render.js first"

imgs = [Image.open(f).convert("RGB") for f in files]
# 2560x1440 px mapped to 13.33x7.5in (standard 16:9 slide) => 192 dpi
out = os.path.join(HERE, "allmeta-Ontology-v1-launch.pdf")
imgs[0].save(out, save_all=True, append_images=imgs[1:], resolution=192.0)
print(f"wrote {out}  ({len(imgs)} pages, {imgs[0].size[0]}x{imgs[0].size[1]} px each)")
