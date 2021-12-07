import IMessageService from '../../interfaces/IMessageService.interface';

class EmailMessageService implements IMessageService {
	send(): void {
		// eslint-disable-next-line no-console
		console.log('This is an email message');
	}
}

export default EmailMessageService;
