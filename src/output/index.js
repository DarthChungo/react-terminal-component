import { OutputType } from 'javascript-terminal-more';
import TextOutput from 'output/TextOutput';
import TextErrorOutput from 'output/TextErrorOutput';
import HeaderOutput from 'output/HeaderOutput';
import ImageOutput from 'output/ImageOutput';
import TypingOutput from 'output/TypingOutput'
import LinkOutput from './LinkOutput';

export default {
  [OutputType.TEXT_OUTPUT_TYPE]: TextOutput,
  [OutputType.TEXT_ERROR_OUTPUT_TYPE]: TextErrorOutput,
  [OutputType.HEADER_OUTPUT_TYPE]: HeaderOutput,
  [OutputType.IMAGE_OUTPUT_TYPE]: ImageOutput,
  [OutputType.TYPING_OUTPUT_TYPE]: TypingOutput,
  [OutputType.LINK_OUTPUT_TYPE]: LinkOutput
};
