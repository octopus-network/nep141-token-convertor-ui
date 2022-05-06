export interface TokenMetadata {
  id: string;
  name: string;
  symbol: string;
  decimals: number;
  icon: string;

}

export interface TokenMetadataWithAmount extends TokenMetadata{
  near?: number | string;
  total?: number;
  amountLabel?: string;
  amount?: number;
  nearNonVisible?: number | string;
}

export const nearMetadata: TokenMetadata = {
  id: "NEAR",
  name: "NEAR",
  symbol: "NEAR",
  decimals: 24,
  icon: "https://near.org/wp-content/themes/near-19/assets/img/brand-icon.png",
};

export interface FTStorageBalance {
  total: string;
  available: string;
}
