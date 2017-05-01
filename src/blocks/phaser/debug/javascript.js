/**
 * @fileoverview JavaScript for the Phaser Blocks.
 *
 * @license Copyright 2017 The Coding with Chrome Authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @author mbordihn@google.com (Markus Bordihn)
 */


/**
 * Debug camera.
 * @return {!string}
 */
Blockly.JavaScript['phaser_debug_camera'] = function() {
  return 'game.debug.cameraInfo(game.camera, 32, 32);\n';
};


/**
 * Debug pointer.
 * @return {!string}
 */
Blockly.JavaScript['phaser_debug_pointer'] = function() {
  return 'game.debug.pointer(game.input.activePointer);\n';
};


/**
 * Debug sprite.
 * @param {Blockly.Block} block
 * @return {!string}
 */
Blockly.JavaScript['phaser_debug_sprite'] = function(block) {
  let variable = Blockly.JavaScript.valueToCode(block,
    'variable', Blockly.JavaScript.ORDER_ATOMIC);

  return 'game.debug.spriteInfo(' + variable + ', 32, 32);\n';
};
