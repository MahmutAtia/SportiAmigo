from django.db import models
from userauth.models import CustomUser



class FriendList(models.Model):
    user = models.OneToOneField(CustomUser, on_delete=models.CASCADE, related_name='user')
    friends = models.ManyToManyField(CustomUser, blank=True, related_name='friends')

    def __str__(self):
        return self.user.email
    
    def add_friend(self, account):
        if not account in self.friends.all():
            self.friends.add(account)
            self.save()
    def remove_friend(self, account):
        if account in self.friends.all():
            self.friends.remove(account)
            self.save()

    def unfriend(self, removee):
        remover_friends_list = self# person terminating the friendship

        # Remove friend from remover friend list
        remover_friends_list.remove_friend(removee)
        
        # Remove friend from removee friend list
        friends_list = FriendList.objects.get(user=removee)
        friends_list.remove_friend(self.user)

    def is_mutual_friend(self, friend):
        if friend in self.friends.all():
            return True
        return False
    def get_friends(self):
        return self.friends.all()
    

class FriendRequest(models.Model):

    sender = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='sender')
    receiver = models.ForeignKey(CustomUser, on_delete=models.CASCADE, related_name='receiver')
    is_active = models.BooleanField(blank=True, null=False, default=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return self.sender.email + " - " + self.receiver.email
    

    def accept(self):
        receiver_friend_list, created = FriendList.objects.get_or_create(user=self.receiver)
        if receiver_friend_list:
            receiver_friend_list.add_friend(self.sender)
            sender_friend_list, created = FriendList.objects.get_or_create(user=self.sender)
            if sender_friend_list:
                sender_friend_list.add_friend(self.receiver)
                self.is_active = False
                self.save()
        
    def decline(self):
        self.is_active = False
        self.save()

    def cancel(self):
        """ 
            Called when the sender of the friend request cancels the request
        """
        
        self.is_active = False
        self.save()
    
