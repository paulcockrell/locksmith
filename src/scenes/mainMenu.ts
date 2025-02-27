import k from "../kaplayCtx";
import mapData from "../../maps/main_menu.map.json";
import { drawScene, setCamScale } from "../utils";
import { SCALE_FACTOR } from "../contants";
import { gameState } from "../state";

const mapDims = {
  width: mapData.width * mapData.tilewidth * SCALE_FACTOR,
  height: mapData.height * mapData.tileheight * SCALE_FACTOR,
};

gameState.setMapDimensions(mapDims);

export default function mainMenu() {
  k.setCamPos(mapDims.width / 2, mapDims.height / 2);
  setCamScale(k);

  k.setBackground(k.Color.fromHex("#9bd4c3"));

  const map = k.add([k.pos(0)]);

  drawScene(k, map, mapData);

  k.add([
    k.scale(SCALE_FACTOR),
    k.text("Kitties", {
      font: "arcadeclassic",
      size: 25,
    }),
    k.color(k.Color.fromHex("#FFFFFF")),
    k.pos(k.getCamPos().x, k.getCamPos().y - 65),
    k.anchor("center"),
  ]);

  k.add([
    k.scale(SCALE_FACTOR),
    k.text("Memory Maze", {
      font: "arcadeclassic",
      size: 25,
    }),
    k.color(k.Color.fromHex("#FFFFFF")),
    k.pos(k.getCamPos()),
    k.anchor("center"),
  ]);

  k.add([
    k.scale(SCALE_FACTOR),
    k.text("Press SPACE to start", {
      font: "monogram",
      size: 20,
    }),
    k.color(k.Color.fromHex("#FFFFFF")),
    k.pos(k.getCamPos().x, k.getCamPos().y + 50),
    k.anchor("center"),
  ]);

  k.add([
    k.scale(SCALE_FACTOR),
    k.text("Press C for credits", {
      font: "monogram",
      size: 20,
    }),
    k.color(k.Color.fromHex("#FFFFFF")),
    k.pos(k.getCamPos().x, k.getCamPos().y + 80),
    k.anchor("center"),
  ]);

  k.add([
    k.scale(SCALE_FACTOR),
    k.text("Press H for help", {
      font: "monogram",
      size: 20,
    }),
    k.color(k.Color.fromHex("#FFFFFF")),
    k.pos(k.getCamPos().x, k.getCamPos().y + 110),
    k.anchor("center"),
  ]);

  k.onResize(() => {
    setCamScale(k);
  });

  k.onKeyPress(["space"], () => {
    const nextScene = gameState.setScene("levelOne");
    k.go(nextScene);
  });

  k.onKeyPress(["c"], () => {
    const nextScene = gameState.setScene("credits");
    k.go(nextScene);
  });

  k.onKeyPress(["h"], () => {
    const nextScene = gameState.setScene("help");
    k.go(nextScene);
  });
}
