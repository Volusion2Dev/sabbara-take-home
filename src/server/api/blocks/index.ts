import { ApiResponse } from '../../apiResponse';
import * as db from '../../datastore';
import { Block } from '../../../types';

export async function getBlocks(): Promise<ApiResponse> {
  try {
    const blocks: Block[] = await db.getBlocks();
    return { statusCode: 200, data: blocks };
  } catch (err) {
    return { statusCode: 500, data: { message: err.message }};
  }
}

export async function addBlock(block: Block): Promise<ApiResponse> {
  try {
    const response = await db.addBlock(block);
    return { statusCode: 200, data: response };
  } catch (err) {
    return { statusCode: 500, data: { message: err.message }};
  }
}
