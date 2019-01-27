const asana = require('asana')
const personalAccessToken = '0/76e33f89cb473d7e2a31d47d5be2748c';

exports.lambdaHandler = async (event, context) => {
    try {
		const client = asana.Client.create().useAccessToken(personalAccessToken);
		const whoami = await client.users.me()
			.then(function(me) {
				const { email, name, workspaces } = me;

				return {
					'statusCode': 200,
					'body': JSON.stringify({
						email,
						name,
						workspace: workspaces[0].name,
					})
				}
		});

		return whoami;
    } catch (err) {
        console.log(err);
        return err;
    }
};
