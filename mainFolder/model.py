import torch.nn as nn
import torch.nn.functional as F

class SkinCancerCNN(nn.Module):
    def __init__(self):
        # CNN:
            # 128x128x3 -> 5x5 Conv (padding) + 2x2 Max Pool -> 64x64x8
            # 64x64x8 -> 5x5 Conv (padding) + 2x2 Max Pool -> 32x32x16
            # 32x32x16 -> 5x5 Conv (padding) + 2x2 Max Pool -> 16x16x32
            # 16x16x32 -> 5x5 Conv (padding) + 2x2 Max Pool -> 8x8x64
            # 8x8x64 -> 5x5 Conv (padding) + 2x2 Max Pool -> 4x4x128
            # 4x4x128 -> 5x5 Conv (padding) + 2x2 Max Pool -> 2x2x256
            # 2x2x256 -> 5x5 Conv (padding) + 2x2 Max Pool -> 1x1x512
            # ReLU on every layer
            # Flatten to a 512x1 vector
        # Feedforward:
            # 512 -> 1024 -> 256 -> 64 -> 16 -> 1
            # ReLU everywhere, sigmoid estimate at the end
        super(SkinCancerCNN, self).__init__()  # Correct usage of super()

        self.Conv1 = nn.Conv2d(in_channels=3, out_channels=8, kernel_size=5, padding=2)
        self.Conv2 = nn.Conv2d(in_channels=8, out_channels=16, kernel_size=5, padding=2)
        self.Conv3 = nn.Conv2d(in_channels=16, out_channels=32, kernel_size=5, padding=2)
        self.Conv4 = nn.Conv2d(in_channels=32, out_channels=64, kernel_size=5, padding=2)
        self.Conv5 = nn.Conv2d(in_channels=64, out_channels=128, kernel_size=5, padding=2)
        self.Conv6 = nn.Conv2d(in_channels=128, out_channels=256, kernel_size=5, padding=2)
        self.Conv7 = nn.Conv2d(in_channels=256, out_channels=512, kernel_size=5, padding=2)
        
        self.fc1 = nn.Linear(in_features=512, out_features=1024)
        self.fc2 = nn.Linear(in_features=1024, out_features=256)
        self.fc3 = nn.Linear(in_features=256, out_features=64)
        self.fc4 = nn.Linear(in_features=64, out_features=16)
        self.fc5 = nn.Linear(in_features=16, out_features=1)

        self.pool = nn.MaxPool2d(kernel_size=2, stride=2)

    def forward(self, x):
        image = x
        # send the image through the Conv layers
        out = self.pool(F.relu(self.Conv1(image)))
        out = self.pool(F.relu(self.Conv2(out)))
        out = self.pool(F.relu(self.Conv3(out)))
        out = self.pool(F.relu(self.Conv4(out)))
        out = self.pool(F.relu(self.Conv5(out)))
        out = self.pool(F.relu(self.Conv6(out)))
        out = self.pool(F.relu(self.Conv7(out)))

        # flatten
        out = out.view(-1)

        # send through feedforward layers
        out = F.relu(self.fc1(out))
        out = F.relu(self.fc2(out))
        out = F.relu(self.fc3(out))
        out = F.relu(self.fc4(out))
        out = F.sigmoid(self.fc5(out))

        # return prediction
        return out
