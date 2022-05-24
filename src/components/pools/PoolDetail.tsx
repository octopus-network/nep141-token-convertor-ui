import { ConversionPool } from '@/domain/near/types';
import { Button, Col, Input, Row } from 'antd';
import { ftGetTokenMetadata } from '@/domain/near/ft/methods';
import exchangeSrc from '@/assets/exchange.svg';
import { useTokenMetadata } from '@/hooks/convertor';
import { ChangeEvent, useState } from 'react';
import { NearAmount } from '@/domain/near/NearAmount';
import { ConvertorContract } from '@/domain/near/convertor';
import { NearTransactionBooks } from '@/domain/near/transaction';
import { wallet } from '@/domain/near/global';

export function SwapButton() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '40%', height: 1, border: 'solid #ACC0D8 1px' }} />
      <img
        src={exchangeSrc}
        alt="svg"
        style={{ width: '30px', cursor: 'pointer' }}
      />
      <div style={{ width: '40%', height: 1, border: 'solid #ACC0D8 1px' }} />
    </div>
  );
}

export function PoolDetail({ pool }: { pool: ConversionPool }) {
  const inToken = useTokenMetadata(pool.in_token);
  const outToken = useTokenMetadata(pool.out_token);
  const [inTokenAmount, setInTokenAmount] = useState('');

  const [outValue, setOutValue] = useState<string>('');
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInTokenAmount(e.target.value);
    let input = Number(e.target.value);
    let output = (input * pool.out_token_rate) / pool.in_token_rate;
    setOutValue(output.toFixed(2));
  };

  return (
    <div>
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        convert:
        <Input
          style={{ width: '200px', marginInline: '10px' }}
          onChange={handleInputChange}
        />
        {inToken ? inToken.symbol : ''}
        {inToken ? <img src={inToken.icon} /> : ''}
        {`balance:${NearAmount.transfer_to_readable(
          pool.in_token_balance,
          inToken ? inToken.decimals : 1,
        )}`}
      </div>

      <SwapButton />
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        receive:
        <Input
          style={{ width: '200px', marginInline: '10px' }}
          disabled={true}
          value={outValue}
        />
        {outToken ? outToken.symbol : ''}
        {outToken ? <img src={outToken.icon} /> : ''}
        {`balance:${NearAmount.transfer_to_readable(
          pool.out_token_balance,
          outToken ? outToken.decimals : 1,
        )}`}
      </div>
      <div>
        <Row>Ratio:</Row>
        <Row align={'middle'} justify={'center'} style={{ margin: '5px' }}>
          {inToken ? (
            <span>
              {inToken.symbol}
              <img
                src={inToken.icon}
                style={{ height: '50%', margin: '2px' }}
              />
              {pool.in_token_rate}
            </span>
          ) : (
            ''
          )}
          :
          {outToken ? (
            <span>
              {pool.out_token_rate}
              <img
                src={outToken.icon}
                style={{ height: '50%', margin: '2px' }}
              />
              {outToken.symbol}
            </span>
          ) : (
            ''
          )}
        </Row>
      </div>
      <Row justify={'center'}>
        <Col>
          <Button
            type={'primary'}
            onClick={() =>
              NearTransactionBooks.check_storage_convert(
                wallet.getAccountId(),
                pool.out_token,
                pool.id,
                pool.in_token,
                inTokenAmount,
              ).then((e) => e.execute())
            }
          >
            convert
          </Button>
          <Button
            style={{ margin: '20px' }}
            type={'primary'}
            onClick={() =>
              NearTransactionBooks.withdraw_delete_pool(
                pool.id,
                pool.in_token,
                pool.out_token,
              ).execute('localhost:8000')
            }
          >
            delete
          </Button>
        </Col>
      </Row>
    </div>
  );
}
