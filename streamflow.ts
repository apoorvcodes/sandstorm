// const createStreamParams = {
//     sender: wallet, // Wallet/Keypair signing the transaction, creating and sending the stream.
//     recipient: "4ih00075bKjVg000000tLdk4w42NyG3Mv0000dc0M00", // Solana recipient address.
//     mint: "DNw99999M7e24g99999999WJirKeZ5fQc6KY999999gK", // SPL Token mint.
//     start: 1643363040, // Timestamp (in seconds) when the stream/token vesting starts.
//     depositedAmount: getBN(1000000000000, 9), // Deposited amount of tokens (using smallest denomination).
//     period: 1, // Time step (period) in seconds per which the unlocking occurs.
//     cliff: 1643363160, // Vesting contract "cliff" timestamp in seconds.
//     cliffAmount: new BN(100000000000), // Amount (smallest denomination) unlocked at the "cliff" timestamp.
//     amountPerPeriod: getBN(5000000000, 9), // Release rate: how many tokens are unlocked per each period.
//     name: "Transfer to Jane Doe.", // The stream name or subject.
//     canTopup: false, // setting to FALSE will effectively create a vesting contract.
//     cancelableBySender: true, // Whether or not sender can cancel the stream.
//     cancelableByRecipient: false, // Whether or not recipient can cancel the stream.
//     transferableBySender: true, // Whether or not sender can transfer the stream.
//     transferableByRecipient: false, // Whether or not recipient can transfer the stream.
//     automaticWithdrawal: true, // [WIP] Whether or not a 3rd party (e.g. cron job, "cranker") can initiate a token withdraw/transfer.
//     withdrawalFrequency: 10, // [WIP] Relevant when automatic withdrawal is enabled. If greater than 0 our withdrawor will take care of withdrawals. If equal to 0 our withdrawor will skip, but everyone else can initiate withdrawals.
//     partner: null, //  (optional) Partner's wallet address (string | null).
// };

// try {
//     const { ixs, tx, metadata } = await StreamClient.create(createStreamParams);
// } catch (exception) {
//     // handle exception
// }
