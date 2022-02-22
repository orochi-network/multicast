import hre from 'hardhat';
import Deployer from './helpers/deployer';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Multicast } from '../typechain';
import BytesBuffer from './helpers/bytes';

let deployer: Deployer, accounts: SignerWithAddress[], multiCast: Multicast;

describe('Multicast', () => {
  it('We should able to deploy Multicast contract', async () => {
    deployer = Deployer.getInstance(hre);
    accounts = await hre.ethers.getSigners();
    multiCast = <Multicast>await deployer.connect(accounts[0]).contractDeploy('orochi/Multicast', [], []);
  });

  it('We should able to call Multicast contract', async () => {
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

    console.log(await multiCast.callStatic.multicast(buf.invoke()));
  });

  it('We should able to call Multicast contract', async () => {
    const callData = [
      multiCast.interface.encodeFunctionData('state'),
      multiCast.interface.encodeFunctionData('eth', [
        '0xC014BA5EC014ba5ec014Ba5EC014ba5Ec014bA5E9C00CccFC23c3AC90c48D37226D4E2aF2D3d3415',
      ]),
    ];

    const buf = new BytesBuffer().writeUint16(callData.length).writeAddress(multiCast.address);

    for (let i = 0; i < callData.length; i += 1) {
      const bufData = new BytesBuffer().writeBytes(callData[i]).invoke();
      buf.writeUint16(bufData.length).writeBytes(bufData);
    }

    console.log(await multiCast.callStatic.cast(buf.invoke()));
  });
});
