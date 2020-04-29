# JavaScript Minifying

## JavaScriptはTerserによってMinifyしてください

1. ``% npm install terser -g``でterserをローカルにインストールしてください。（npmインストール済み）
2. ``% terser {target_file}.js -c -m``でCompressとMangle を行います。``% terser --compress --mangle {target_file}.js``でも可能。