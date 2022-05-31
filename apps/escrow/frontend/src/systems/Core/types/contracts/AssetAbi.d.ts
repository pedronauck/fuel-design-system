/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
  BigNumber,
} from "fuels";

export type AddressStruct = { value: string };

interface AssetAbiInterface extends Interface {
  functions: {
    "mint_and_send_to_address(u64,struct Address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "mint_and_send_to_address",
    values: [BigNumberish, AddressStruct]
  ): string;

  decodeFunctionData(
    functionFragment: "mint_and_send_to_address",
    data: BytesLike
  ): DecodedValue;
}

export class AssetAbi extends Contract {
  interface: AssetAbiInterface;
  functions: {
    mint_and_send_to_address(
      amount: BigNumberish,
      recipient: AddressStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;

    "mint_and_send_to_address(u64,struct Address)"(
      amount: BigNumberish,
      recipient: AddressStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<boolean>;
  };

  mint_and_send_to_address(
    amount: BigNumberish,
    recipient: AddressStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<boolean>;

  "mint_and_send_to_address(u64,struct Address)"(
    amount: BigNumberish,
    recipient: AddressStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<boolean>;
}
