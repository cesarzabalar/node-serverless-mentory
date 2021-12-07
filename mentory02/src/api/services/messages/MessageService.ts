import IMessageService from '../../../interfaces/IMessageService.interface';

class MessageService {
	constructor(private messageService: IMessageService) {}

	send(): void {
		this.messageService.send();
	}
}

export default MessageService;
