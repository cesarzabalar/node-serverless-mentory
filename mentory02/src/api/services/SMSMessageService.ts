import IMessageService from '../../interfaces/IMessageService.interface';

class SMSMessageService implements IMessageService {
	send(): void {
		// eslint-disable-next-line no-console
		console.log('This is a SMS message');
	}
}

export default SMSMessageService;
