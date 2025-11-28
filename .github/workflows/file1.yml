name: Release Workflow

on:
  release:
    types: [published]  # Options: created, published, edited, deleted, prereleased, released

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: release-build
          path: dist/

  publish:
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Download build artifact
        uses: actions/download-artifact@v4
        with:
          name: release-build
          path: dist/

      - name: Publish Release Assets
        uses: softprops/action-gh-release@v2
        with:
          files: dist/**
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
