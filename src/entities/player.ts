import { GameObj, KAPLAYCtx, Vec2 } from "kaplay";
import { SCALE_FACTOR } from "../contants";
import { areAnyOfTheseKeysDown } from "../utils";

export function makePlayer(k: KAPLAYCtx, pos: Vec2) {
  const player = k.make([
    k.sprite("spritesheet", { anim: "player" }),
    k.area({
      shape: new k.Rect(k.vec2(0, 5), 16, 6),
    }),
    k.body(),
    k.anchor("center"),
    k.pos(pos),
    k.scale(SCALE_FACTOR),
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    "player",
  ]);

  setPlayerControls(k, player);

  return player;
}

function setPlayerControls(k: KAPLAYCtx, player: GameObj) {
  k.onKeyDown("left", () => {
    if (areAnyOfTheseKeysDown(k, ["up", "down"])) return;

    player.move(-player.speed, 0);
    player.direction = "left";
  });

  k.onKeyDown("right", () => {
    if (areAnyOfTheseKeysDown(k, ["up", "down"])) return;

    player.move(player.speed, 0);
    player.direction = "right";
  });

  k.onKeyDown("up", () => {
    if (areAnyOfTheseKeysDown(k, ["left", "right"])) return;

    player.move(0, -player.speed);
    player.direction = "up";
  });

  k.onKeyDown("down", () => {
    if (areAnyOfTheseKeysDown(k, ["left", "right"])) return;

    player.move(0, player.speed);
    player.direction = "down";
  });

  k.onKeyRelease(() => {
    player.stop();
  });
}
