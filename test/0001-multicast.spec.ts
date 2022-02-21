import hre from 'hardhat';
import Deployer from './helpers/deployer';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { MultiCast } from '../typechain';
import BytesBuffer from './helpers/bytes';

let deployer: Deployer, accounts: SignerWithAddress[], multiCast: MultiCast;

describe('MultiCast', () => {
  it('We should able to deploy MultiCast contract', async () => {
    deployer = Deployer.getInstance(hre);
    accounts = await hre.ethers.getSigners();
    multiCast = <MultiCast>await deployer.connect(accounts[0]).contractDeploy('orochi/MultiCast', [], []);
  });

  it('We should able to call MultiCast contract', async () => {
    const callData = [
      {
        address: multiCast.address,
        data: multiCast.interface.encodeFunctionData('state'),
      },
      {
        address: multiCast.address,
        data: multiCast.interface.encodeFunctionData('eth', [
          '0xC014BA5EC014ba5ec014Ba5EC014ba5Ec014bA5E9C00CccFC23c3AC90c48D37226D4E2aF2D3d3415',
        ]),
      },
    ];
    const buf = new BytesBuffer().writeUint16(callData.length);

    for (let i = 0; i < callData.length; i += 1) {
      const bufData = new BytesBuffer().writeBytes(callData[i].data).invoke();
      buf.writeAddress(callData[i].address).writeUint16(bufData.length).writeBytes(bufData);
    }
    console.log(buf.invoke().toString('hex'));
    const results = await multiCast.callStatic.cast(buf.invoke());
    console.log('result', results);
  });
});
